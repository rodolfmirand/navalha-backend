import { Expose, Type } from "class-transformer";
import { CustomerPreferencesResponseDto } from "./customer-preferences/customer-preferences-response.dto";
import { AppointmentResponseDto } from "../appointment/appointment-response.dto";

export class CustomerResponseDto {
    @Expose()
    readonly id: string;

    @Expose()
    readonly name: string;

    @Expose()
    readonly email: string;

    @Expose()
    @Type(() => CustomerPreferencesResponseDto)
    readonly preferences?: CustomerPreferencesResponseDto;

    @Type(() => AppointmentResponseDto)
    @Expose()
    readonly appointments?: AppointmentResponseDto[];
}