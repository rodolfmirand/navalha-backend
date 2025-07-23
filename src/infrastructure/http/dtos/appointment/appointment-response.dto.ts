import { IsDate, IsEnum } from "class-validator";
import { AppointmentStatus } from "src/domain/enums/appointment-status.enum";

export class AppointmentResponseDto {
    readonly id: string;

    @IsEnum(AppointmentResponseDto)
    readonly status: AppointmentStatus;

    @IsDate()
    readonly startTime: Date;

    readonly priceInCents: number;
    readonly customerId: string;
    readonly barberId: string;
    readonly barbershopId: string;
    readonly serviceId: string;
}