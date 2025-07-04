import { IsBoolean, IsOptional, IsUUID } from "class-validator";

export class BookingPreferencesDto {
    @IsOptional()
    @IsUUID()
    readonly preferredBarberId?: string;

    @IsOptional()
    @IsUUID('4', { each: true })
    readonly preferredServicesId?: string[];
    
    @IsBoolean()
    readonly sendReminder: boolean;
}