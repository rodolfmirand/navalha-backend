import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";

@Injectable()
export class UpdateUserService {

    constructor(private readonly repository: UserRepositoryImpl) { }

    async execute(id: string, user: User): Promise<User> {
        const existingUser = await this.repository.findById(id);
        if (!existingUser) {
            throw new NotFoundException('User not found.');
        }

        if (user.name) existingUser.name = user.name;
        if (user.email) existingUser.email = user.email;
        if (user.phoneNumber) existingUser.phoneNumber = user.phoneNumber;
        if (user.role) existingUser.role = user.role;

        return await this.repository.save(existingUser);
    }
}