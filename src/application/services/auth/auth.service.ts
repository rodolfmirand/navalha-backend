import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";
import * as bcrypt from 'bcrypt';
import { User } from "src/domain/entities/user.entity";
import { UUID } from "crypto";
import { JwtService } from "@nestjs/jwt";
import { AuthJwtPayload } from "./types/auth-jwtPayload.type";

@Injectable()
export class AuthService {

    constructor(private readonly userRepository: UserRepositoryImpl, private readonly jwtService: JwtService) { }

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
        return this.jwtService.sign(payload);
    }
}