import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateServiceDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    priceInCents: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    durationInMinutes: number;
}