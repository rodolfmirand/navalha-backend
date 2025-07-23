import { IsBoolean, IsOptional, IsUUID } from "class-validator";

export class BookingPreferencesDto {
    @IsOptional()
    @IsUUID()
    preferredBarberId?: string;

    @IsOptional()
    @IsUUID('4', { each: true })
    preferredServicesId?: string[];

    @IsBoolean()
    sendReminder: boolean;
}