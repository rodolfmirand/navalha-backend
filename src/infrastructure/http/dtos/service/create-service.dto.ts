import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateServiceDto {
    @IsUUID('4')
    readonly barbershopId: string;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly description?: string;

    @IsNumber()
    @IsNotEmpty()
    readonly priceInCents: number;

    @IsNumber()
    @IsNotEmpty()
    readonly durationInMinutes: number;
}