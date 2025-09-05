import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LocalLoginDto {

    @IsString()
    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'Password must have at least 8 characters.' })
    password: string;
}