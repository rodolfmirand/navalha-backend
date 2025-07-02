import { IsDate, IsNotEmpty, IsUUID } from "class-validator";

export class CreateAppointmentDto {
    @IsUUID('4')
    @IsNotEmpty()
    clientId: string;

    @IsUUID('4')
    @IsNotEmpty()
    barberId: string;

    @IsUUID('4')
    @IsNotEmpty()
    barbershopId: string;

    @IsUUID('4')
    @IsNotEmpty()
    serviceId: string;

    @IsDate()
    @IsNotEmpty()
    startTime: Date;
}