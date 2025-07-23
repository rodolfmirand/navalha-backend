import { Type } from "class-transformer";
import { BarbershopAddressDto } from "./address/barbershop-address.dto";
import { BarberResponseDto } from "../barber/barber-response.dto";
import { ServiceResponseDto } from "../service/service-response.dto";
import { OperatingHoursDto } from "./operating-hours/operating-hours.dto";

export class BarbershopResponseDto {
    readonly id: string;
    readonly ownerId: string;

    readonly name: string;
    readonly description?: string;
    readonly logoUrl?: string;

    @Type(() => BarbershopAddressDto)
    readonly address: BarbershopAddressDto;

    readonly contactPhone: string;
    readonly contactEmail: string;

    @Type(() => BarberResponseDto)
    readonly barbers: BarberResponseDto[];

    @Type(() => ServiceResponseDto)
    readonly services: ServiceResponseDto[];

    @Type(() => OperatingHoursDto)
    readonly operatingHours: OperatingHoursDto;
}