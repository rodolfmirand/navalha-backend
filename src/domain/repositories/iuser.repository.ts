import { User } from '../entities/user.entity';

export interface IUserRepository {
    save(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByPhoneNumber(phoneNumber: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    delete(id: string): Promise<void>;
}