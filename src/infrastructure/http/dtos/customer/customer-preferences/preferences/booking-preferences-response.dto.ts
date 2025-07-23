export class BookingPreferencesResponseDto {
    readonly preferredBarberId?: string;
    readonly preferredServicesId?: string[];
    readonly sendReminder: boolean;
}