import { Type } from "class-transformer";
import { BookingPreferencesResponseDto } from "./preferences/booking-preferences-response.dto";
import { ServicePreferencesResponseDto } from "./preferences/service-preferences-response.dto";

export class CustomerPreferencesResponseDto {
    @Type(() => BookingPreferencesResponseDto)
    readonly booking: BookingPreferencesResponseDto;

    @Type(() => ServicePreferencesResponseDto)
    readonly service: ServicePreferencesResponseDto;
}