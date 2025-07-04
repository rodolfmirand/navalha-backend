import { IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
import { CustomerPreferencesDto } from "./customer-preferences/customer-preferences.dto";
import { Type } from "class-transformer";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    readonly phoneNumber: string;

    @ValidateNested()
    @Type(() => CustomerPreferencesDto)
    readonly preferences?: CustomerPreferencesDto;
}