import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateBarberDto {
    @IsUUID('4')
    @IsNotEmpty()
    barbershopId: string;

    @IsUUID('4')
    userId: string;

    @IsArray()
    @IsOptional()
    specialties: string[];

    @IsOptional()
    @IsString()
    bio?: string;
}