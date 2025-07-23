import { IsNotEmpty, IsOptional, IsString, IsUUID, MinLength, ValidateNested } from "class-validator";
import { CustomerPreferencesDto } from "./customer-preferences/customer-preferences.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
    @IsUUID('4')
    @IsNotEmpty()
    userId: string;

    @ValidateNested()
    @Type(() => CustomerPreferencesDto)
    @IsOptional()
    preferences?: CustomerPreferencesDto;
}