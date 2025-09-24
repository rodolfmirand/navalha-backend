import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class FindUserService {

    constructor(@Inject('UserRepository') private readonly repository: IUserRepository) { }

    async execute(id: string): Promise<User> {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new NotFoundException("User not found.");
        }

        return user;
    }
}