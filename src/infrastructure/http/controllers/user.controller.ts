import { Body, Controller, Delete, Get, Param, Post, Put, NotFoundException, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { CreateUserService } from "src/application/services/user/create-user.service";
import { DeleteUserService } from "src/application/services/user/delete-user.service";
import { FindUserService } from "src/application/services/user/find-user.service";
import { CreateUserDto } from "../dtos/user/create-user.dto";
import { UserMapper } from "src/infrastructure/persistence/mappers/user.mapper";
import { UserResponseDTO } from "../dtos/user/user-response.dto";
import { FindAllUsersService } from "src/application/services/user/find-all-users.service";
import { UpdateUserDto } from "../dtos/user/update-user.dto";
import { UpdateUserService } from "src/application/services/user/update-user.service";
import { JwtAuthGuard } from 'src/application/services/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {

    constructor(private readonly createUser: CreateUserService,
        private readonly findUser: FindUserService,
        private readonly findAllUsers: FindAllUsersService,
        private readonly deleteUser: DeleteUserService,
        private readonly updateUser: UpdateUserService
    ) { }

    @Post()
    async create(@Body() dto: CreateUserDto): Promise<UserResponseDTO> {
        try {
            const user = UserMapper.fromCreateDTO(dto);
            const savedUser = await this.createUser.execute(user);
            return UserMapper.toDTO(savedUser);
        } catch (error) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message
            },
                HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async find(@Param('id') id: string): Promise<UserResponseDTO> {
        const user = await this.findUser.execute(id);
        return UserMapper.toDTO(user);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll(): Promise<UserResponseDTO[]> {
        const users = await this.findAllUsers.execute();
        return users.map(UserMapper.toDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deleteUser.execute(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<UserResponseDTO> {
        const user = UserMapper.fromUpdateDTO(dto);
        const updatedUser = await this.updateUser.execute(id, user);
        return UserMapper.toDTO(updatedUser);
    }
}
