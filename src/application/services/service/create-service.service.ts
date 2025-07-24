import { Injectable, NotFoundException } from "@nestjs/common";
import { Service } from "src/domain/entities/service.entity";
import { IBarbershopRepository } from "src/domain/repositories/ibarbershop.repository";
import { IServiceRepository } from "src/domain/repositories/iservice.repository";

@Injectable()
export class CreateServiceService {

    constructor(private readonly serviceRepository: IServiceRepository, private readonly barbershopRepository: IBarbershopRepository) { }

    async execute(service: Service): Promise<Service> {
        const barbershop = await this.barbershopRepository.findById(service.barbershopId);
        if (!barbershop) {
            throw new NotFoundException("Barber Shop not found.");
        }

        return await this.serviceRepository.save(service);
    }
}