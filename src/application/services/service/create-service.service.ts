import { Injectable, NotFoundException } from "@nestjs/common";
import { Service } from "src/domain/entities/service.entity";
import { BarbershopRepositoryImpl } from "src/infrastructure/persistence/repositories/barbershop.repository.impl";
import { ServiceRepositoryImpl } from "src/infrastructure/persistence/repositories/service.repository.impl";

@Injectable()
export class CreateServiceService {

    constructor(private readonly serviceRepository: ServiceRepositoryImpl, private readonly barbershopRepository: BarbershopRepositoryImpl) { }

    async execute(service: Service): Promise<Service> {
        const barbershop = await this.barbershopRepository.findById(service.barbershopId);
        if (!barbershop) {
            throw new NotFoundException("Barber Shop not found.");
        }

        return await this.serviceRepository.save(service);
    }
}