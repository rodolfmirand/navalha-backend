import { Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";

@Injectable()
export class FindAllUsersService {

    constructor(private readonly repository: UserRepositoryImpl) { }

    async execute(): Promise<User[]> {
        return await this.repository.findAll();
    }
}