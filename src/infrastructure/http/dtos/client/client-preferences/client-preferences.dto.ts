import { IsOptional, ValidateNested } from "class-validator";
import { BookingPreferencesDto } from "./booking-preferences.dto";
import { ServicePreferencesDto } from "./service-preferences.dto";
import { Type } from "class-transformer";

export class ClientPreferencesDto {
    @IsOptional()
    @ValidateNested()
    @Type(() => BookingPreferencesDto)
    readonly booking?: BookingPreferencesDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ServicePreferencesDto)
    readonly services?: ServicePreferencesDto;
}