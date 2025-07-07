import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from '../../../domain/repositories/iuser.repository';

export class UserRepositoryImpl implements IUserRepository {
    save(user: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<User | null> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}