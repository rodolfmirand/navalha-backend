import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must have at least 8 characters.' })
    readonly passwordHash: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    readonly phoneNumber: string;
}