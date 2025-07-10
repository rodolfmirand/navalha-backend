import { Injectable, NotFoundException } from "@nestjs/common";
import { Customer } from "src/domain/entities/customer.entity";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";

@Injectable()
export class FindCustomer {

    constructor(private readonly repository: ICustomerRepository) { }

    async execute(id: string): Promise<Customer> {
        const customer = await this.repository.findById(id);
        if (!customer) {
            throw new NotFoundException("Customer not found");
        }

        return customer;
    }
}