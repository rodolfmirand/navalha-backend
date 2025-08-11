import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";

@Injectable()
export class FindUserService {

    constructor(private readonly repository: UserRepositoryImpl) { }

    async execute(id: string): Promise<User> {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new NotFoundException("User not found.");
        }

        return user;
    }
}