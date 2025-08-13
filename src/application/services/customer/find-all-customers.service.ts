import { Injectable } from "@nestjs/common";
import { Customer } from "src/domain/entities/customer.entity";
import { CustomerRepositoryImpl } from "src/infrastructure/persistence/repositories/customer.repository.impl";

@Injectable()
export class FindAllCUstomersService {

    constructor(private readonly repository: CustomerRepositoryImpl) { }

    async execute(): Promise<Customer[]> {
        return await this.repository.findAll();
    }
}