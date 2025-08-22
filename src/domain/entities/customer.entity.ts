import { Appointment } from "./appointment.entity";

export class Customer {
    id: string;
    userId: string;

    // booking
    preferredBarberId: string;
    preferredServicesId: string[];
    sendReminder: boolean;

    //service
    chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';
    allergiesOrSensitivities: string;
    generalNotes: string;

    appointments: Appointment[];
}