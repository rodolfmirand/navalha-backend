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

    async save(customer: Customer): Promise<void> {
        const model = CustomerMapper.toPersistence(customer);
        await this.repository.save(model);
    }

    async findById(id: string): Promise<Customer | null> {
        const model = await this.repository.findOneBy({ id });
        return model ? CustomerMapper.toDomain(model) : null;
    }

    async findAll(): Promise<Customer[]> {
        const entities = await this.repository.find();
        return entities.map(CustomerMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}