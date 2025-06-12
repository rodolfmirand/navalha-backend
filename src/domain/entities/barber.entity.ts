import { Appointment } from "./appointment.entity";
import { Service } from "./service.entity";

export class Barber {
    id: string;
    userId: string;
    barbershopId: string;

    specialties: string[];
    bio?: string;

    availableServices: Service[];
    appointments: Appointment[];
}