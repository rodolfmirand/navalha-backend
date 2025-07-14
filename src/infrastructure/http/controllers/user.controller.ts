import { Body, Controller, Post } from "@nestjs/common";
import { FindAllUsersService } from "src/application/services/customer/find-all-customers.service";
import { CreateUserService } from "src/application/services/user/create-user.service";
import { DeleteUserService } from "src/application/services/user/delete-user.service";
import { FindUserService } from "src/application/services/user/find-user.service";
import { CreateUserDto } from "../dtos/user/create-user.dto";
import { UserMapper } from "src/infrastructure/persistence/mappers/user.mapper";

@Controller('user')
export class UserController {

    constructor(private readonly createUser: CreateUserService,
        private readonly findUser: FindUserService,
        private readonly findAllUsers: FindAllUsersService,
        private readonly deleteUser: DeleteUserService
    ) { }

    @Post()
    async create(@Body() dto: CreateUserDto): Promise<void> {
        const user = UserMapper.fromDTO(dto);
        await this.createUser.execute(user);
    }
}
