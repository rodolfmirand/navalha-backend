import { Appointment } from "./appointment.entity";

export class Barbershop {
    id: string;
    ownerId: string;

    name: string;
    description?: string;
    logoUrl?: string;

    address: {
        street: string;
        city: string;
        district: string;
        number: string;
        state: string;
    }

    contactPhone: string;
    contactEmail: string;

    appointments: Appointment[];
}