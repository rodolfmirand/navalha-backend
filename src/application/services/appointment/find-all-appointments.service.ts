import { Injectable } from "@nestjs/common";
import { Appointment } from "src/domain/entities/appointment.entity";
import { AppointmentRepositoryImpl } from "src/infrastructure/persistence/repositories/appointment.repository.impl";

@Injectable()
export class FindAllAppointmentsService {

    constructor(private readonly repository: AppointmentRepositoryImpl) { }

    async execute(): Promise<Appointment[]> {
        return await this.repository.findAll();
    }
}