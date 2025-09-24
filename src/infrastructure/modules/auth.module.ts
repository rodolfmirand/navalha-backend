import { Module } from "@nestjs/common";
import { AuthController } from "../http/controllers/auth.controller";
import { UserRepositoryImpl } from "../persistence/repositories/user.repository.impl";
import { AuthService } from '../../application/services/auth/auth.service';
import { LocalStrategy } from "src/application/services/auth/strategies/local.strategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "../persistence/typeorm/models/user.model";
import { JwtModule } from "@nestjs/jwt";
import jwtConfig from "src/application/config/jwt.config";
import { ConfigModule } from "@nestjs/config";
import { JwtStrategy } from "src/application/services/auth/strategies/jwt.strategy";
import refreshJwtConfig from "src/application/config/refresh-jwt.config";
import { RefreshJwtStrategy } from "src/application/services/auth/strategies/refresh.strategy";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature([UserModel]),
            JwtModule.registerAsync(jwtConfig.asProvider()),
            ConfigModule.forFeature(jwtConfig),
            ConfigModule.forFeature(refreshJwtConfig)
        ],
        controllers: [AuthController],
        providers: [AuthService, UserRepositoryImpl, LocalStrategy, JwtStrategy, RefreshJwtStrategy,
            {
                provide: 'UserRepository',
                useExisting: UserRepositoryImpl
            }
        ],
        exports: []
    }
)
export class AuthModule { }