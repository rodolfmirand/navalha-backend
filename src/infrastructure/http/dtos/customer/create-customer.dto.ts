import { IsNotEmpty, IsString, IsUUID, MinLength, ValidateNested } from "class-validator";
import { CustomerPreferencesDto } from "./customer-preferences/customer-preferences.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
    @IsUUID('4')
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    readonly phoneNumber: string;

    @ValidateNested()
    @Type(() => CustomerPreferencesDto)
    readonly preferences?: CustomerPreferencesDto;
}