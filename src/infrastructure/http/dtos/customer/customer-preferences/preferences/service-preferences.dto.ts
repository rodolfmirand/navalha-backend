import { IsEnum, IsOptional, IsString } from "class-validator";

export class ServicePreferencesDto {
    @IsEnum(['QUIET', 'NORMAL', 'CHATTY'])
    chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';

    @IsOptional()
    @IsString()
    allergiesOrSensitivities?: string;

    @IsOptional()
    @IsString()
    generalNotes?: string;
}