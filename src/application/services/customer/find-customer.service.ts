import { Injectable, NotFoundException } from "@nestjs/common";
import { Customer } from "src/domain/entities/customer.entity";
import { CustomerRepositoryImpl } from "src/infrastructure/persistence/repositories/customer.repository.impl";

@Injectable()
export class FindCustomerService {

    constructor(private readonly repository: CustomerRepositoryImpl) { }

    async execute(id: string): Promise<Customer> {
        const customer = await this.repository.findById(id);
        if (!customer) {
            throw new NotFoundException("Customer not found");
        }

        return customer;
    }
}