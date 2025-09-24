import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class UpdateUserService {

    constructor(@Inject('UserRepository') private readonly repository: IUserRepository) { }

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