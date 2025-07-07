import { Appointment } from "src/domain/entities/appointment.entity";
import { IAppointmentRepository } from "src/domain/repositories/iappointment.repository";

export class AppointmentRepositoryImpl implements IAppointmentRepository {
    save(appointment: Appointment): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Appointment> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Appointment[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}