import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";
import { CustomerRepositoryImpl } from "src/infrastructure/persistence/repositories/customer.repository.impl";

@Injectable()
export class DeleteCustomerService {

    constructor(@Inject('CustomerRepository') private readonly repository: ICustomerRepository) { }

    async execute(id: string): Promise<void> {
        const customer = await this.repository.findById(id);
        if (!customer) {
            throw new NotFoundException("Customer not found.")
        }

        await this.repository.delete(id);
    }
}