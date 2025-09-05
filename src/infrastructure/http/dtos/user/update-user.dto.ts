import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { UserRole } from "src/domain/enums/user-role.enum";

export class UpdateUserDto {
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
    username: string;

    @IsOptional()
    @IsPhoneNumber('BR')
    @IsNotEmpty()
    phoneNumber: string;

    @IsEnum(UserRole)
    @IsOptional()
    role: UserRole;
}