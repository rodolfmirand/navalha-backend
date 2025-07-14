import { Injectable, NotFoundException } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class DeleteUserService {

    constructor(private readonly repository: IUserRepository) { }

    async execute(id: string): Promise<void> {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new NotFoundException("User not found.");
        }

        await this.repository.delete(id);
    }
}