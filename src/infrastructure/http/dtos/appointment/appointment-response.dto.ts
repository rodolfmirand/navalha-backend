import { Expose } from "class-transformer";
import { AppointmentStatus } from "src/domain/enums/appointment-status.enum";

export class AppointmentResponseDto {
    @Expose()
    readonly id: string;

    @Expose()
    readonly status: AppointmentStatus;

    @Expose()
    readonly startTime: Date;

    @Expose()
    readonly priceInCents: number;

    @Expose()
    readonly customerId: string;

    @Expose()
    readonly barberId: string;

    @Expose()
    readonly barbershopId: string;

    @Expose()
    readonly serviceId: string;
}