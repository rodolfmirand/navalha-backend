import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from '../../../domain/repositories/iuser.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserModel } from '../typeorm/models/user.model';
import { Repository } from 'typeorm';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {

    constructor(@InjectRepository(UserModel) private readonly repository: Repository<UserModel>) { }

    async save(user: User): Promise<void> {
        const userModel = UserMapper.toDomain(user);
        await this.repository.save(userModel);
    }

    async findById(id: string): Promise<User | null> {
        const userModel = await this.repository.findOneBy({ id });
        if (userModel == null) return null;
        return UserMapper.toDomain(userModel);
    }

    async findAll(): Promise<User[]> {
        return await this.findAll();
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}