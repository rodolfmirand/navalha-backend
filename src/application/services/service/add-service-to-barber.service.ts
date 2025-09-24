import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";
import { IServiceRepository } from "src/domain/repositories/iservice.repository";

@Injectable()
export class AddServiceToBarberService {

    constructor(@Inject('ServiceRepository') private readonly serviceRepository: IServiceRepository, @Inject('BarberRepository') private readonly barberRepository: IBarberRepository) { }

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