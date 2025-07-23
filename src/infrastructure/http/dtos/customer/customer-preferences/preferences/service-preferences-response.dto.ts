import { IsEnum } from "class-validator";

export class ServicePreferencesResponseDto {
    @IsEnum(['QUIET', 'NORMAL', 'CHATTY'])
    readonly chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';

    readonly allergiesOrSensitivities?: string;
    readonly generalNotes?: string;
}