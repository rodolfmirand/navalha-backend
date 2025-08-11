import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";
import { UserRole } from "src/domain/enums/user-role.enum";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsPhoneNumber('BR')
    @IsNotEmpty()
    readonly phoneNumber: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must have at least 8 characters.' })
    readonly password: string;

    @IsEnum(UserRole)
    @IsOptional()
    readonly role: UserRole;
}