import { Injectable, NotFoundException } from "@nestjs/common";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";

@Injectable()
export class DeleteCustomerService {

    constructor(private readonly repository: ICustomerRepository) { }

    async execute(id: string): Promise<void> {
        const customer = await this.repository.findById(id);
        if (!customer) {
            throw new NotFoundException("Customer not found.")
        }

        await this.repository.delete(id);
    }
}