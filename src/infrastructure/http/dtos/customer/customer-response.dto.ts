import { Expose, Type } from "class-transformer";
import { CustomerPreferencesResponseDto } from "./customer-preferences/customer-preferences-response.dto";
import { AppointmentResponseDto } from "../appointment/appointment-response.dto";

export class CustomerResponseDto {
    @Expose()
    id: string;

    @Expose()
    @Type(() => CustomerPreferencesResponseDto)
    preferences?: CustomerPreferencesResponseDto;

    @Type(() => AppointmentResponseDto)
    @Expose()
    appointments?: AppointmentResponseDto[];
}