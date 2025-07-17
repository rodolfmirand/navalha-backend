import { Expose } from "class-transformer";
import { AppointmentStatus } from "src/domain/enums/appointment-status.enum";

export class AppointmentResponseDto {
    @Expose()
    id: string;

    @Expose()
    status: AppointmentStatus;

    @Expose()
    startTime: Date;

    @Expose()
    priceInCents: number;

    @Expose()
    customerId: string;

    @Expose()
    barberId: string;

    @Expose()
    barbershopId: string;

    @Expose()
    serviceId: string;
}