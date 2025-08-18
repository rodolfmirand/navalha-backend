import { Injectable, NotFoundException } from "@nestjs/common";
import { AppointmentRepositoryImpl } from "src/infrastructure/persistence/repositories/appointment.repository.impl";

@Injectable()
export class DeleteAppointmentService {

    constructor(private readonly repository: AppointmentRepositoryImpl) { }

    async execute(id: string): Promise<void> {
        const appointment = await this.repository.findById(id);
        if (!appointment) {
            throw new NotFoundException("Appointment not found.");
        }

        await this.repository.delete(id);
    }
}