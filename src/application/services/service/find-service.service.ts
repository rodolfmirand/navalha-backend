import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Service } from "src/domain/entities/service.entity";
import { IServiceRepository } from "src/domain/repositories/iservice.repository";

@Injectable()
export class FindServiceService {

    constructor(@Inject('ServiceRepository') private readonly repository: IServiceRepository) { }

    async execute(id: string): Promise<Service> {
        const service = await this.repository.findById(id);
        if (!service) {
            throw new NotFoundException("Service not found.")
        }

        return service;
    }
}