import { Expose, Type } from "class-transformer";
import { ClientPreferencesResponseDto } from "./client-preferences/client-preferences-response.dto";
import { AppointmentResponseDto } from "../appointment/appointment-response.dto";

export class ClientResponseDto {
    @Expose()
    readonly id: string;

    @Expose()
    readonly name: string;

    @Expose()
    readonly email: string;

    @Expose()
    @Type(() => ClientPreferencesResponseDto)
    readonly preferences?: ClientPreferencesResponseDto;

    @Type(() => AppointmentResponseDto)
    @Expose()
    readonly appointments?: AppointmentResponseDto[];
}