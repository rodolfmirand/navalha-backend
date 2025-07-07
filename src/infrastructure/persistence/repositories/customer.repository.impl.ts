import { Customer } from "src/domain/entities/customer.entity";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";

export class CustomerRepositoryImpl implements ICustomerRepository {
    save(customer: Customer): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Customer | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Customer[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}