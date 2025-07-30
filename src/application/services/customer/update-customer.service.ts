import { Injectable, NotFoundException } from "@nestjs/common";
import { Customer } from "src/domain/entities/customer.entity";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";

@Injectable()
export class UpdateCustomerService {
    constructor(private readonly repository: ICustomerRepository) { }

    async execute(id: string, customer: Customer): Promise<Customer> {
        const existingCustomer = await this.repository.findById(id);
        if(!existingCustomer) {
            throw new NotFoundException("Customer not found.");
        }

        existingCustomer.preferences = customer.preferences;

        return await this.repository.save(existingCustomer);
    }
}