import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateBarberDto {
    @IsArray()
    @IsNotEmpty()
    @IsOptional()
    specialties: string[];

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    bio: string;
}