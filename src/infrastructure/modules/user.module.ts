import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "../http/controllers/user.controller";
import { CreateUserService } from "src/application/services/user/create-user.service";
import { FindUserService } from "src/application/services/user/find-user.service";
import { FindAllUsersService } from "src/application/services/user/find-all-users.service";
import { DeleteUserService } from "src/application/services/user/delete-user.service";
import { UpdateUserService } from "src/application/services/user/update-user.service";
import { UserRepositoryImpl } from "../persistence/repositories/user.repository.impl";
import { UserModel } from "../persistence/typeorm/models/user.model";

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [CreateUserService, FindUserService, FindAllUsersService, DeleteUserService, UpdateUserService, UserRepositoryImpl],
    exports: [UserRepositoryImpl]
})
export class UserModule { }