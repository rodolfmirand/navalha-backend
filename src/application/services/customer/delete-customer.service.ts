import { Injectable, NotFoundException } from "@nestjs/common";
import { CustomerRepositoryImpl } from "src/infrastructure/persistence/repositories/customer.repository.impl";

@Injectable()
export class DeleteCustomerService {

    constructor(private readonly repository: CustomerRepositoryImpl) { }

    async execute(id: string): Promise<void> {
        const customer = await this.repository.findById(id);
        if (!customer) {
            throw new NotFoundException("Customer not found.")
        }

        await this.repository.delete(id);
    }
}