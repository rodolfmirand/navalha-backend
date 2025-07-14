import { Injectable, NotFoundException } from "@nestjs/common";
import { Appointment } from "src/domain/entities/appointment.entity";
import { IAppointmentRepository } from "src/domain/repositories/iappointment.repository";

@Injectable()
export class FindAppointmentService {

    constructor(private readonly repository: IAppointmentRepository) { }

    async execute(id: string): Promise<Appointment> {
        const appointment = await this.repository.findById(id);
        if (!appointment) {
            throw new NotFoundException("Appointment not found");
        }

        return appointment;
    }
}