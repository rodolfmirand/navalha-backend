import { Module } from "@nestjs/common";
import { AuthController } from "../http/controllers/auth.controller";
import { UserRepositoryImpl } from "../persistence/repositories/user.repository.impl";
import { AuthService } from '../../application/services/auth/auth.service';
import { LocalStrategy } from "src/application/services/auth/strategies/local.strategy";
import { Type } from "class-transformer";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "../persistence/typeorm/models/user.model";

@Module(
    {
        imports: [TypeOrmModule.forFeature([UserModel])],
        controllers: [AuthController],
        providers: [AuthService, UserRepositoryImpl, LocalStrategy],
        exports: []
    }
)
export class AuthModule { }