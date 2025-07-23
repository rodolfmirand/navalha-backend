import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateServiceDto {
    @IsUUID('4')
    barbershopId: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    priceInCents: number;

    @IsNumber()
    @IsNotEmpty()
    durationInMinutes: number;
}