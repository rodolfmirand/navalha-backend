import { Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import * as bcrypt from 'bcrypt';
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";
import { CustomerRepositoryImpl } from '../../../infrastructure/persistence/repositories/customer.repository.impl';
import { Customer } from "src/domain/entities/customer.entity";

@Injectable()
export class CreateUserService {

    constructor(private readonly repository: UserRepositoryImpl, private readonly customerRepository: CustomerRepositoryImpl) { }

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

        const savedUser = await this.repository.save(user);

        if (!user.role) {
            const customer = new Customer();
            customer.userId = savedUser.id;
            await this.customerRepository.save(customer);
        }

        return savedUser;
    }
}