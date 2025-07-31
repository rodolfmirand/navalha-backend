import { IsEnum, IsNotEmpty } from "class-validator";
import { AppointmentStatus } from "src/domain/enums/appointment-status.enum";

export class UpdateAppointmentDto {
    @IsNotEmpty()
    @IsEnum(AppointmentStatus)
    status: AppointmentStatus;
}