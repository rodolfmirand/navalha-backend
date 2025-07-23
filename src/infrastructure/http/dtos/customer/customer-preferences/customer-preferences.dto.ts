import { IsOptional, ValidateNested } from "class-validator";
import { BookingPreferencesDto } from "./preferences/booking-preferences.dto";
import { ServicePreferencesDto } from "./preferences/service-preferences.dto";
import { Type } from "class-transformer";

export class CustomerPreferencesDto {
    @IsOptional()
    @ValidateNested()
    @Type(() => BookingPreferencesDto)
    booking?: BookingPreferencesDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ServicePreferencesDto)
    services?: ServicePreferencesDto;
}