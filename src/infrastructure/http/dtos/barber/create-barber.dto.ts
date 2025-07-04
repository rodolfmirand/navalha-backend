import { IsArray, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateBarberDto {
    @IsUUID('4')
    readonly barbershopId: string;

    @IsArray()
    readonly specialties: string[];

    @IsOptional()
    @IsString()
    readonly bio?: string;
}