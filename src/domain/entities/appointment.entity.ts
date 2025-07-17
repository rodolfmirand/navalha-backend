import { AppointmentStatus } from "../enums/appointment-status.enum";

export class Appointment {
    id: string;
    customerId: string;
    barberId: string;
    barbershopId: string;
    serviceId: string;

    status: AppointmentStatus;

    startTime: Date;

    priceInCents: number;
}