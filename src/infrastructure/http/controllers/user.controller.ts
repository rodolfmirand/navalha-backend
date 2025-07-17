import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { FindAllCUstomersService } from "src/application/services/customer/find-all-customers.service";
import { CreateUserService } from "src/application/services/user/create-user.service";
import { DeleteUserService } from "src/application/services/user/delete-user.service";
import { FindUserService } from "src/application/services/user/find-user.service";
import { CreateUserDto } from "../dtos/user/create-user.dto";
import { UserMapper } from "src/infrastructure/persistence/mappers/user.mapper";
import { UserResponseDTO } from "../dtos/user/user-response.dto";
import { FindAllUsersService } from "src/application/services/user/find-all-users.service";

@Controller('user')
export class UserController {

    constructor(private readonly createUser: CreateUserService,
        private readonly findUser: FindUserService,
        private readonly findAllUsers: FindAllUsersService,
        private readonly deleteUser: DeleteUserService
    ) { }

    @Post()
    async create(@Body() dto: CreateUserDto): Promise<UserResponseDTO> {
        const user = UserMapper.fromDTO(dto);
        const savedUser = await this.createUser.execute(user);
        return UserMapper.toDTO(savedUser);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<UserResponseDTO> {
        const user = await this.findUser.execute(id);
        return UserMapper.toDTO(user);
    }

    @Get()
    async findAll(): Promise<UserResponseDTO[]> {
        const users = await this.findAllUsers.execute();
        return users.map(UserMapper.toDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deleteUser.execute(id);
    }
}
