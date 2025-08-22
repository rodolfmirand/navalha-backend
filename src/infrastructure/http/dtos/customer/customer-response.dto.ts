import { Type } from "class-transformer";
import { AppointmentResponseDto } from "../appointment/appointment-response.dto";

export class CustomerResponseDto {
    readonly id: string;
    readonly userId: string;

    // booking
    readonly preferredBarberId: string;
    readonly preferredServicesId: string[];
    readonly sendReminder: boolean;

    // service
    readonly chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';
    readonly allergiesOrSensitivities: string;
    readonly generalNotes: string;

    @Type(() => AppointmentResponseDto)
    readonly appointments: AppointmentResponseDto[];
}