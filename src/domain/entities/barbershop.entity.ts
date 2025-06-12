import { Appointment } from "./appointment.entity";
import { Barber } from "./barber.entity";
import { OperatingHours } from './operating-hours.entity';
import { Service } from "./service.entity";

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

    barbers: Barber[];
    services: Service[];
    operatingHours: OperatingHours[];
    appointments: Appointment[];
}