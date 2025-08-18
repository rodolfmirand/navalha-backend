import { Injectable, NotFoundException } from "@nestjs/common";
import { AppointmentStatus } from "src/domain/enums/appointment-status.enum";
import { AppointmentRepositoryImpl } from "src/infrastructure/persistence/repositories/appointment.repository.impl";

@Injectable()
export class UpdateAppointmentService {
    constructor(private readonly repository: AppointmentRepositoryImpl) { }

    async execute(id: string, status: AppointmentStatus): Promise<void> {
        const appointment = await this.repository.findById(id);
        if (!appointment) {
            throw new NotFoundException("Appointment not found.");
        }

        appointment.status = status;
        await this.repository.save(appointment);
    }
}