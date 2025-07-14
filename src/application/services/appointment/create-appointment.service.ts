import { Injectable, NotFoundException } from "@nestjs/common";
import { Appointment } from "src/domain/entities/appointment.entity";
import { IAppointmentRepository } from "src/domain/repositories/iappointment.repository";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";
import { IBarbershopRepository } from "src/domain/repositories/ibarbershop.repository";
import { ICustomerRepository } from "src/domain/repositories/icustomer.repository";
import { IServiceRepository } from "src/domain/repositories/iservice.repository";

@Injectable()
export class CreateAppointmentService {

    constructor(private readonly customerRepository: ICustomerRepository,
        private readonly barberRepository: IBarberRepository,
        private readonly barbershopRepository: IBarbershopRepository,
        private readonly serviceRepository: IServiceRepository,
        private readonly appointmentRepository: IAppointmentRepository
    ) { }

    async execute(appointment: Appointment): Promise<void> {
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

        await this.appointmentRepository.save(appointment);
    }
}