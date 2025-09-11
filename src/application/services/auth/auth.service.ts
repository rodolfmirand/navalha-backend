import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";
import * as bcrypt from 'bcrypt';
import { User } from "src/domain/entities/user.entity";
import { UUID } from "crypto";
import { JwtService } from "@nestjs/jwt";
import { AuthJwtPayload } from "./types/auth-jwtPayload.type";
import refreshJwtConfig from "src/application/config/refresh-jwt.config";
import { ConfigType } from "@nestjs/config";
import * as argon from 'argon2';

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepositoryImpl,
        private readonly jwtService: JwtService,
        @Inject(refreshJwtConfig.KEY) private readonly refreshJwtOptions: ConfigType<typeof refreshJwtConfig>,
    ) { }

    async validateUser(login: string, password: string): Promise<User | null> {
        const isEmail = login.includes('@');

        const user = isEmail
            ? await this.userRepository.findByEmail(login)
            : await this.userRepository.findByUsername(login);

        if (!user) {
            throw new NotFoundException('User not found.');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return user;
    }

    async login(userId: UUID) {
        const { accessToken, refreshToken } = await this.generateTokens(userId);

        const hashedRefreshToken = await argon.hash(refreshToken);

        await this.userRepository.updateRefreshToken(userId, hashedRefreshToken);

        return {
            userId: userId,
            accessToken, refreshToken
        };
    }

    async generateTokens(userId: UUID) {
        const payload: AuthJwtPayload = { sub: userId }
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload),
            this.jwtService.signAsync(payload, this.refreshJwtOptions)
        ]);

        return {
            userId: userId,
            accessToken,
            refreshToken
        }
    }

    async refreshToken(userId: UUID) {
        const { accessToken, refreshToken } = await this.generateTokens(userId);

        const hashedRefreshToken = await argon.hash(refreshToken);

        await this.userRepository.updateRefreshToken(userId, hashedRefreshToken);

        return {
            id: userId,
            accessToken,
            refreshToken,
        };
    }

    async validateRefreshToken(userId: UUID, refreshToken: string) {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new NotFoundException('User not found.');
        }

        if (!user.hashedRefreshToken) {
            throw new UnauthorizedException('Invalid refresh token.');
        }

        const refreshTokenMatches = await argon.verify(user.hashedRefreshToken, refreshToken);
        if (!refreshTokenMatches) {
            throw new UnauthorizedException('Access Denied.');
        }

        return { id: userId };
    }

    async signOut(userId: UUID) {
        await this.userRepository.updateRefreshToken(userId, "");
    }
}