import { Expose, Type } from "class-transformer";
import { CustomerPreferencesResponseDto } from "./customer-preferences/customer-preferences-response.dto";
import { AppointmentResponseDto } from "../appointment/appointment-response.dto";

export class CustomerResponseDto {
    readonly id: string;

    @Type(() => CustomerPreferencesResponseDto)
    readonly preferences?: CustomerPreferencesResponseDto;

    @Type(() => AppointmentResponseDto)
    readonly appointments?: AppointmentResponseDto[];
}