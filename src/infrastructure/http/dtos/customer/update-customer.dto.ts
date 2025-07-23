import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, ValidateNested } from "class-validator";
import { CustomerPreferencesDto } from './customer-preferences/customer-preferences.dto';
import { Type } from "class-transformer";

export class UpdateClientDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must have at least 8 characters.' })
    passwordHash: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    phoneNumber: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CustomerPreferencesDto)
    preferences?: CustomerPreferencesDto;
}