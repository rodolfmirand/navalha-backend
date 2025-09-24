import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Customer } from "src/domain/entities/customer.entity";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class CreateCustomerService {

    constructor(@Inject('CustomerRepository') private readonly customerRepository: ICustomerRepository, @Inject('UserRepository') private readonly userRepository: IUserRepository) { }

    async execute(customer: Customer): Promise<Customer> {
        const user = await this.userRepository.findById(customer.userId);
        if (!user) {
            throw new NotFoundException("User not found.");
        }

        return await this.customerRepository.save(customer);
    }
}