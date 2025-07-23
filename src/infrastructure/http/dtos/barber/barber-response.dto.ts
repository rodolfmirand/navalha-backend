import { Type } from "class-transformer";
import { AppointmentResponseDto } from "../appointment/appointment-response.dto";
import { ServiceResponseDto } from "../service/service-response.dto";

export class BarberResponseDto {
    readonly id: string;
    readonly userId: string;
    readonly barbershopId: string;
    readonly specialties: string[];
    readonly bio: string;

    @Type(() => ServiceResponseDto)
    readonly availableServices: ServiceResponseDto[];

    @Type(() => AppointmentResponseDto)
    readonly appointments: AppointmentResponseDto[];
}