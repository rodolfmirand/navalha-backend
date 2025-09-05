import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";
import { UserRole } from "src/domain/enums/user-role.enum";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail({}, { message: 'Invalid email format.' })
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5, { message: 'Username must have at least 5 characters.' })
    readonly username: string;

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