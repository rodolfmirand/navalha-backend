import { IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
import { ClientPreferencesDto } from "./client-preferences/client-preferences.dto";
import { Type } from "class-transformer";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    readonly phoneNumber: string;

    @ValidateNested()
    @Type(() => ClientPreferencesDto)
    readonly preferences?: ClientPreferencesDto;
}