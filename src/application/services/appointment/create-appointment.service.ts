import { Injectable, NotFoundException } from "@nestjs/common";
import { Appointment } from "src/domain/entities/appointment.entity";
import { AppointmentRepositoryImpl } from "src/infrastructure/persistence/repositories/appointment.repository.impl";
import { BarberRepositoryImpl } from "src/infrastructure/persistence/repositories/barber.repository.impl";
import { BarbershopRepositoryImpl } from "src/infrastructure/persistence/repositories/barbershop.repository.impl";
import { CustomerRepositoryImpl } from "src/infrastructure/persistence/repositories/customer.repository.impl";
import { ServiceRepositoryImpl } from "src/infrastructure/persistence/repositories/service.repository.impl";

@Injectable()
export class CreateAppointmentService {

    constructor(private readonly customerRepository: CustomerRepositoryImpl,
        private readonly barberRepository: BarberRepositoryImpl,
        private readonly barbershopRepository: BarbershopRepositoryImpl,
        private readonly serviceRepository: ServiceRepositoryImpl,
        private readonly appointmentRepository: AppointmentRepositoryImpl
    ) { }

    async execute(appointment: Appointment): Promise<Appointment> {
        const customer = await this.customerRepository.findById(appointment.customerId);
        if (!customer) {
            throw new NotFoundException("Customer not found.");
        }

        const barber = await this.barberRepository.findById(appointment.barberId);
        if (!barber) {
            throw new NotFoundException("Barber not found.");
        }

        const barbershop = await this.barbershopRepository.findById(appointment.barbershopId);
        if (!barbershop) {
            throw new NotFoundException("Barber shop not found");
        }

        const service = await this.serviceRepository.findById(appointment.serviceId);
        if (!service) {
            throw new NotFoundException("Service not found");
        }

        appointment.priceInCents = service.priceInCents;

        return await this.appointmentRepository.save(appointment);
    }
}