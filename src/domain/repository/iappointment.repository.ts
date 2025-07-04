import { Appointment } from "../entities/appointment.entity";

export interface IAppointmentRepository {
    save(appointment: Appointment): Promise<void>;
    findById(id: string): Promise<Appointment>;
    findAll(): Promise<Appointment[]>;
    delete(id: string): Promise<void>;
}