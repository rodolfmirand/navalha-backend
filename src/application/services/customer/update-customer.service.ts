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

        if (customer.preferredBarberId) { existingCustomer.preferredBarberId = customer.preferredBarberId }
        if (customer.preferredServicesId) { existingCustomer.preferredServicesId = customer.preferredServicesId }
        if (customer.sendReminder) { existingCustomer.sendReminder = customer.sendReminder }
        if (customer.allergiesOrSensitivities) { existingCustomer.allergiesOrSensitivities = customer.allergiesOrSensitivities }
        if (customer.chatLevel) { existingCustomer.chatLevel = customer.chatLevel }
        if (customer.generalNotes) { existingCustomer.generalNotes = customer.generalNotes }

        return await this.repository.update(existingCustomer);
    }
}