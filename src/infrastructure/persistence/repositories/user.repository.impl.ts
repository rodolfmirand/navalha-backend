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

    async save(user: User): Promise<User> {
        const model = UserMapper.toPersistence(user);
        const entity = await this.repository.save(model);
        return UserMapper.toDomain(entity);
    }

    async findById(id: string): Promise<User | null> {
        const model = await this.repository.findOneBy({ id });
        return model ? UserMapper.toDomain(model) : null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const model = await this.repository.findOneBy({ email });
        return model ? UserMapper.toDomain(model) : null;
    }

    async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
        const model = await this.repository.findOneBy({ phoneNumber });
        return model ? UserMapper.toDomain(model) : null;
    }

    async findAll(): Promise<User[]> {
        const models = await this.repository.find();
        return models.map(UserMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}