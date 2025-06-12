import { AppointmentStatus } from "../enums/appointment-status.enum";

export class Appointment {
    id: string;
    clientId: string;
    barberId: string;
    barbershopId: string;
    serviceId: string;

    status = AppointmentStatus;

    startTime: Date;

    princeInCents: number;
}