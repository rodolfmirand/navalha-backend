import { Inject, Injectable } from "@nestjs/common";
import { Customer } from "src/domain/entities/customer.entity";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";

@Injectable()
export class FindAllCUstomersService {

    constructor(@Inject('CustomerRepository') private readonly repository: ICustomerRepository) { }

    async execute(): Promise<Customer[]> {
        return await this.repository.findAll();
    }
}