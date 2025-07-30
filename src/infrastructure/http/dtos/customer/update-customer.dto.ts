import { ValidateNested } from "class-validator";
import { CustomerPreferencesDto } from './customer-preferences/customer-preferences.dto';
import { Type } from "class-transformer";

export class UpdateCustomerDto {
    @ValidateNested()
    @Type(() => CustomerPreferencesDto)
    preferences?: CustomerPreferencesDto;
}