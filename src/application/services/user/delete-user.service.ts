import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";

@Injectable()
export class DeleteUserService {

    constructor(private readonly repository: UserRepositoryImpl) { }

    async execute(id: string): Promise<void> {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new NotFoundException("User not found.");
        }

        await this.repository.delete(id);
    }
}