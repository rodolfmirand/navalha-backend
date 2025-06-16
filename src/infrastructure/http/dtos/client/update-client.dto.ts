import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, ValidateNested } from "class-validator";
import { ClientPreferencesDto } from './client-preferences/client-preferences.dto';
import { Type } from "class-transformer";

export class UpdateClientDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must have at least 8 characters.' })
    readonly passwordHash: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    readonly phoneNumber: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => ClientPreferencesDto)
    readonly preferences?: ClientPreferencesDto;
}