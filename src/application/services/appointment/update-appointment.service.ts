import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AppointmentStatus } from "src/domain/enums/appointment-status.enum";
import { IAppointmentRepository } from "src/domain/repositories/iappointment.repository";

@Injectable()
export class UpdateAppointmentService {

    constructor(@Inject('AppointmentRepository') private readonly repository: IAppointmentRepository) { }

    async execute(id: string, status: AppointmentStatus): Promise<void> {
        const appointment = await this.repository.findById(id);
        if (!appointment) {
            throw new NotFoundException("Appointment not found.");
        }

        appointment.status = status;
        await this.repository.save(appointment);
    }
}