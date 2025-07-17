import { Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {

    constructor(private readonly repository: IUserRepository) { }

    async execute(user: User): Promise<User> {
        const emailInUse = await this.repository.findByEmail(user.email);
        if (emailInUse) {
            throw new Error("E-mail already in use.");
        }

        const phoneNumberInUse = await this.repository.findByPhoneNumber(user.phoneNumber);
        if (phoneNumberInUse) {
            throw new Error("Phone number already in use.")
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);

        user.password = hashedPassword;

        return await this.repository.save(user);
    }
}