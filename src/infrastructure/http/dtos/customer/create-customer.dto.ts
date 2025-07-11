import { IsNotEmpty, IsOptional, IsString, IsUUID, MinLength, ValidateNested } from "class-validator";
import { CustomerPreferencesDto } from "./customer-preferences/customer-preferences.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
    @IsUUID('4')
    @IsNotEmpty()
    readonly userId: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    readonly phoneNumber: string;

    @ValidateNested()
    @Type(() => CustomerPreferencesDto)
    @IsOptional()
    readonly preferences?: CustomerPreferencesDto;
}