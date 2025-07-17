import { AppointmentResponseDto } from "../appointment/appointment-response.dto";
import { ServiceResponseDto } from "../service/service-response.dto";

export class BarberResponseDto {
    id: string;
    userId: string;
    barbershopId: string;
    specialties: string[];
    bio: string;
    availableServices: ServiceResponseDto[];
    appointments: AppointmentResponseDto[];
}