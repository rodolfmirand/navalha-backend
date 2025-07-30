import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class UpdateUserService {

    constructor(private readonly repository: IUserRepository) { }

    async execute(id: string, user: User): Promise<User> {
        const existingUser = await this.repository.findById(id);
        if (!existingUser) {
            throw new NotFoundException('User not found.');
        }

        if (user.name !== undefined) existingUser.name = user.name;
        if (user.email !== undefined) existingUser.email = user.email;
        if (user.phoneNumber !== undefined) existingUser.phoneNumber = user.phoneNumber;

        return await this.repository.save(existingUser);
    }
}