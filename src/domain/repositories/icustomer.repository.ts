import { Customer } from "../entities/customer.entity";

export const ICustomerRepository = Symbol('ICustomerRepository');

export interface ICustomerRepository {
    save(customer: Customer): Promise<Customer>;
    findById(id: string): Promise<Customer | null>;
    findAll(): Promise<Customer[]>;
    delete(id: string): Promise<void>;
}