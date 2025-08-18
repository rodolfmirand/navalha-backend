import { Injectable, NotFoundException } from "@nestjs/common";
import { Appointment } from "src/domain/entities/appointment.entity";
import { AppointmentRepositoryImpl } from "src/infrastructure/persistence/repositories/appointment.repository.impl";

@Injectable()
export class FindAppointmentService {

    constructor(private readonly repository: AppointmentRepositoryImpl) { }

    async execute(id: string): Promise<Appointment> {
        const appointment = await this.repository.findById(id);
        if (!appointment) {
            throw new NotFoundException("Appointment not found");
        }

        return appointment;
    }
}