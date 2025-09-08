import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";
import * as bcrypt from 'bcrypt';
import { User } from "src/domain/entities/user.entity";
import { UUID } from "crypto";
import { JwtService } from "@nestjs/jwt";
import { AuthJwtPayload } from "./types/auth-jwtPayload.type";
import refreshJwtConfig from "src/application/config/refresh-jwt.config";
import { ConfigType } from "@nestjs/config";

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

    login(userId: UUID) {
        const payload: AuthJwtPayload = { sub: userId }
        const token = this.jwtService.sign(payload);
        const refreshToken = this.jwtService.sign(payload, this.refreshJwtOptions);

        return {
            userId: userId,
            token, refreshToken
        };
    }

    refreshToken(userId: UUID) {
        const payload: AuthJwtPayload = { sub: userId }
        const token = this.jwtService.sign(payload);
        
        return {
            userId: userId,
            token
        }
    }
}