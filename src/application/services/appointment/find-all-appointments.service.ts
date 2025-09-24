import { Inject, Injectable } from "@nestjs/common";
import { Appointment } from "src/domain/entities/appointment.entity";
import { IAppointmentRepository } from "src/domain/repositories/iappointment.repository";

@Injectable()
export class FindAllAppointmentsService {

    constructor(@Inject('AppointmentRepository') private readonly repository: IAppointmentRepository) { }

    async execute(): Promise<Appointment[]> {
        return await this.repository.findAll();
    }
}