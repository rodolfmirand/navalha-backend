import { User } from 'src/domain/entities/user.entity';
import { UserModel } from '../typeorm/models/user.model';
import { CreateUserDto } from '../../http/dtos/user/create-user.dto';
import { UserResponseDTO } from 'src/infrastructure/http/dtos/user/user-response.dto';
import { UpdateUserDto } from 'src/infrastructure/http/dtos/user/update-user.dto';

export class UserMapper {
    public static toDomain(model: UserModel): User {
        const entity = new User();

        entity.id = model.id;
        entity.name = model.name;
        entity.email = model.email;
        entity.username = model.username;
        entity.password = model.password;
        entity.phoneNumber = model.phoneNumber;
        entity.role = model.role;

        return entity;
    }

    public static toPersistence(entity: User): UserModel {
        const model = new UserModel();

        model.id = entity.id;
        model.name = entity.name;
        model.email = entity.email;
        model.username = entity.username;
        model.password = entity.password;
        model.phoneNumber = entity.phoneNumber;
        model.role = entity.role;
        model.hashedRefreshToken = entity.hashedRefreshToken;

        return model;
    }

    public static fromCreateDTO(dto: CreateUserDto): User {
        const entity = new User();

        entity.name = dto.name;
        entity.email = dto.email;
        entity.username = dto.username;
        entity.phoneNumber = dto.phoneNumber;
        entity.password = dto.password;
        if (dto.role) entity.role = dto.role;

        return entity;
    }

    public static fromUpdateDTO(dto: UpdateUserDto): User {
        const entity = new User();

        if (dto.name) entity.name = dto.name;
        if (dto.email) entity.email = dto.email;
        if (dto.username) entity.username = dto.username;
        if (dto.phoneNumber) entity.phoneNumber = dto.phoneNumber;
        if (dto.role) entity.role = dto.role;

        return entity;
    }

    public static toDTO(entity: User): UserResponseDTO {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.email,
            username: entity.username,
            phoneNumber: entity.phoneNumber,
            role: entity.role
        }
    }
}