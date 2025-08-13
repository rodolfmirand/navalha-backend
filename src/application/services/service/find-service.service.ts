import { Injectable, NotFoundException } from "@nestjs/common";
import { Service } from "src/domain/entities/service.entity";
import { ServiceRepositoryImpl } from "src/infrastructure/persistence/repositories/service.repository.impl";

@Injectable()
export class FindServiceService {

    constructor(private readonly repository: ServiceRepositoryImpl) { }

    async execute(id: string): Promise<Service> {
        const service = await this.repository.findById(id);
        if (!service) {
            throw new NotFoundException("Service not found.")
        }

        return service;
    }
}