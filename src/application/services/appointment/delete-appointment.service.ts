import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IAppointmentRepository } from "src/domain/repositories/iappointment.repository";

@Injectable()
export class DeleteAppointmentService {

    constructor(@Inject('AppointmentRepository') private readonly repository: IAppointmentRepository) { }

    async execute(id: string): Promise<void> {
        const appointment = await this.repository.findById(id);
        if (!appointment) {
            throw new NotFoundException("Appointment not found.");
        }

        await this.repository.delete(id);
    }
}