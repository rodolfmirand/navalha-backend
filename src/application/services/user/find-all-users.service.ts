import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class FindAllUsersService {

    constructor(@Inject('UserRepository') private readonly repository: IUserRepository) { }

    async execute(): Promise<User[]> {
        return await this.repository.findAll();
    }
}