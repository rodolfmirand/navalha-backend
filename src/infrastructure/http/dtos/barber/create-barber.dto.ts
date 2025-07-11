import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateBarberDto {
    @IsUUID('4')
    @IsNotEmpty()
    readonly barbershopId: string;

    @IsUUID('4')
    readonly userId: string;

    @IsArray()
    @IsOptional()
    readonly specialties: string[];

    @IsOptional()
    @IsString()
    readonly bio?: string;
}