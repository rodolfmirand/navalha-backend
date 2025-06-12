import { Appointment } from "./appointment.entity";

export class Client {
    id: string;
    userId: string;

    preferences?: {
        booking?: {
            preferredBarberId?: string;
            preferredServicesIds?: string[];
            sendReminder: boolean;
        };
        service?: {
            chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';
            allergiesOrSensitivities?: string;
            generalNotes?: string;
        };
    };

    appointments: Appointment[];
}