import { Injectable } from "@nestjs/common";
import { Service } from "src/domain/entities/service.entity";
import { ServiceRepositoryImpl } from "src/infrastructure/persistence/repositories/service.repository.impl";

@Injectable()
export class FindAllServicesService {

    constructor(private readonly repository: ServiceRepositoryImpl) { }

    async execute(): Promise<Service[]> {
        return await this.repository.findAll();
    }
}