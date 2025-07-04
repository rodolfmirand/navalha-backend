import { Expose } from "class-transformer";

export class CustomerPreferencesResponseDto {
    @Expose()
    booking?: {
        preferredBarberId?: string;
        preferredServicesIds?: string[];
        sendReminder: boolean;
    };

    @Expose()
    service?: {
        chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';
        allergiesOrSensitivities?: string;
        generalNotes?: string;
    };
}