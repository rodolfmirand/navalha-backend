export class Service {
    id: string;
    barbershopId: string;
    
    name: string;
    description?: string;
    
    priceInCents: number;
    
    durationInMinutes: number;
    
    isActive: boolean;
}