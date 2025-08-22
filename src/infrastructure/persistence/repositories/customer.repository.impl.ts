import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/domain/entities/customer.entity";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";
import { CustomerModel } from "../typeorm/models/customer.model";
import { Repository } from "typeorm";
import { CustomerMapper } from "../mappers/customer.mapper";

@Injectable()
export class CustomerRepositoryImpl implements ICustomerRepository {

    constructor(@InjectRepository(CustomerModel) private readonly repository: Repository<CustomerModel>) { }

    async save(customer: Customer): Promise<Customer> {
        const model = CustomerMapper.toPersistence(customer);
        const entity = await this.repository.save(model);
        return CustomerMapper.toDomain(entity);
    }

    async findById(id: string): Promise<Customer | null> {
        const model = await this.repository.findOneBy({ id });
        return model ? CustomerMapper.toDomain(model) : null;
    }

    async findAll(): Promise<Customer[]> {
        const models = await this.repository.find();
        return models.map(CustomerMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }

    async update(customer: Customer): Promise<Customer> {
        return await this.repository.save(customer);
    }
}