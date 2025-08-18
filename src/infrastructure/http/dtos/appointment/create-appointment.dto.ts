import { Transform, Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsUUID } from "class-validator";

export class CreateAppointmentDto {
    @IsUUID('4')
    @IsNotEmpty()
    customerId: string;

    @IsUUID('4')
    @IsNotEmpty()
    barberId: string;

    @IsUUID('4')
    @IsNotEmpty()
    barbershopId: string;

    @IsUUID('4')
    @IsNotEmpty()
    serviceId: string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    startTime: Date;
}