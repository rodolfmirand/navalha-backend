import { IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID } from "class-validator";
import { BarbershopAddressDto } from "./address/barbershop-address.dto";
import { Type } from "class-transformer";
import { OperatingHoursDto } from "./operating-hours/operating-hours.dto";

export class CreateBarbershopDto {
    @IsUUID('4')
    @IsNotEmpty()
    ownerId: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    logoUrl?: string;

    @IsNotEmpty()
    @Type(() => BarbershopAddressDto)
    address: BarbershopAddressDto;

    @IsNotEmpty()
    @IsString()
    contactEmail: string;

    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber('BR')
    contactPhone: string;

}