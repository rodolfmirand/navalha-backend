export class ServiceResponseDto {
    readonly id: string;
    readonly barbershopId: string;

    readonly name: string;
    readonly description: string;

    readonly priceInCents: number;
    readonly durationInMinutes: number;
    readonly isActive: boolean;
}