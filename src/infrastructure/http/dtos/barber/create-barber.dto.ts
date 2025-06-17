import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateBarberDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsUUID('4')
    readonly barbershopId: string;

    @IsArray()
    readonly specialties: string[];

    @IsOptional()
    @IsString()
    readonly bio?: string;
}