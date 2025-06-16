import { IsEnum, IsOptional, IsString } from "class-validator";

export class ServicePreferencesDto {
    @IsEnum(['QUIET', 'NORMAL', 'CHATTY'])
    readonly chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';

    @IsOptional()
    @IsString()
    readonly allergiesOrSensitivities?: string;

    @IsOptional()
    @IsString()
    readonly generalNotes?: string;
}