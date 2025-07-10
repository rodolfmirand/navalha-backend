import { Injectable } from "@nestjs/common";
import { IUserRepository } from '../../../../domain/repositories/iuser.repository';
import { User } from "src/domain/entities/user.entity";

@Injectable()
export class CreateUserService {

    constructor(private readonly repository: IUserRepository) { }

    async execute(user: User): Promise<void> {
        const emailInUse = await this.repository.findByEmail(user.email);
        if (emailInUse) {
            throw new Error("E-mail already in use.");
        }

        const phoneNumberInUse = await this.repository.findByPhoneNumber(user.phoneNumber);
        if (phoneNumberInUse) {
            throw new Error("Phone number already in use.")
        }

        await this.repository.save(user);
    }
}