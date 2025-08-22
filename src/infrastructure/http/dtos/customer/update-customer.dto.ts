import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCustomerDto {
    // booking
    @IsOptional()
    @IsUUID()
    @IsNotEmpty()
    preferredBarberId: string;

    @IsOptional()
    @IsNotEmpty()
    @IsUUID('4', { each: true })
    preferredServicesId: string[];

    @IsBoolean()
    @IsOptional()
    @IsNotEmpty()
    sendReminder: boolean;

    // service
    @IsEnum(['QUIET', 'NORMAL', 'CHATTY'])
    @IsOptional()
    @IsNotEmpty()
    chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    allergiesOrSensitivities: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    generalNotes: string;
}