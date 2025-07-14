import { Injectable } from "@nestjs/common";
import { Appointment } from "src/domain/entities/appointment.entity";
import { IAppointmentRepository } from "src/domain/repositories/iappointment.repository";

@Injectable()
export class FindAllAppointmentsService {

    constructor(private readonly repository: IAppointmentRepository) { }

    async execute(): Promise<Appointment[]> {
        return await this.repository.findAll();
    }
}