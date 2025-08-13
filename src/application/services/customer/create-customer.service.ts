import { Injectable, NotFoundException } from "@nestjs/common";
import { Customer } from "src/domain/entities/customer.entity";
import { CustomerRepositoryImpl } from "src/infrastructure/persistence/repositories/customer.repository.impl";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";

@Injectable()
export class CreateCustomerService {

    constructor(private readonly customerRepository: CustomerRepositoryImpl, private readonly userRepository: UserRepositoryImpl) { }

    async execute(customer: Customer): Promise<Customer> {
        const user = await this.userRepository.findById(customer.userId);
        if (!user) {
            throw new NotFoundException("User not found.");
        }

        return await this.customerRepository.save(customer);
    }
}