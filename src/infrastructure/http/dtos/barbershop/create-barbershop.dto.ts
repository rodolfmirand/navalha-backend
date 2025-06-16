import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { BarbershopAddressDto } from "./barbershop-address.dto";
import { Type } from "class-transformer";
import { OperatingHoursDto } from "./operating-hours.dto";

export class CreateBarbershopDto {
    @IsUUID('4')
    @IsNotEmpty()
    readonly ownerId: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly description?: string;

    @IsOptional()
    @IsString()
    readonly logoUrl?: string;

    @IsNotEmpty()
    @Type(() => BarbershopAddressDto)
    readonly address: BarbershopAddressDto;

    @IsNotEmpty()
    @IsString()
    readonly contactEmail: string;

    @IsNotEmpty()
    @IsString()
    readonly contactPhone: string;

    @Type(() => OperatingHoursDto)
    readonly operatingHours: OperatingHoursDto;
}