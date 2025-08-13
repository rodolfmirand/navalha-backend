import { Injectable, NotFoundException } from "@nestjs/common";
import { Customer } from "src/domain/entities/customer.entity";
import { CustomerRepositoryImpl } from "src/infrastructure/persistence/repositories/customer.repository.impl";

@Injectable()
export class UpdateCustomerService {
    constructor(private readonly repository: CustomerRepositoryImpl) { }

    async execute(id: string, customer: Customer): Promise<Customer> {
        const existingCustomer = await this.repository.findById(id);
        if (!existingCustomer) {
            throw new NotFoundException("Customer not found.");
        }

        existingCustomer.preferences = customer.preferences;

        return await this.repository.save(existingCustomer);
    }
}