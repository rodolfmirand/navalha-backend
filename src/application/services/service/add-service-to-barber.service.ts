import { Injectable, NotFoundException } from "@nestjs/common";
import { BarberRepositoryImpl } from "src/infrastructure/persistence/repositories/barber.repository.impl";
import { ServiceRepositoryImpl } from "src/infrastructure/persistence/repositories/service.repository.impl";

@Injectable()
export class AddServiceToBarberService {

    constructor(private readonly serviceRepository: ServiceRepositoryImpl, private readonly barberRepository: BarberRepositoryImpl) { }

    async execute(servicesId: string[], barberId: string): Promise<void> {
        const barber = await this.barberRepository.findById(barberId);
        if (!barber) {
            throw new NotFoundException("Barber not found.");
        }

        for (let serviceIndex = 0; serviceIndex < servicesId.length; serviceIndex++) {
            const serviceId = servicesId[serviceIndex];

            const service = await this.serviceRepository.findById(serviceId);
            if (!service) {
                throw new NotFoundException(`Service not found. ID: ${serviceId}.`);
            }

            barber.availableServices.push(service);
        }

        await this.barberRepository.save(barber);
    }
}