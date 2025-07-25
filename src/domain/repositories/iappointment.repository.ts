import { Appointment } from "../entities/appointment.entity";

export interface IAppointmentRepository {
    save(appointment: Appointment): Promise<Appointment>;
    findById(id: string): Promise<Appointment | null>;
    findAll(): Promise<Appointment[]>;
    delete(id: string): Promise<void>;
}