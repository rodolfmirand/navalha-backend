export class ServiceResponseDto {
    id: string;
    barbershopId: string;

    name: string;
    description: string;
    
    priceInCents: number;
    durationInMinutes: number;
    isActive: boolean;
}