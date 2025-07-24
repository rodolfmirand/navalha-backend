import { Barbershop } from "src/domain/entities/barbershop.entity";
import { BarbershopAddressResponseDto } from "src/infrastructure/http/dtos/barbershop/address/barbershop-address-response.dto";

export class BarbershopAddressMapper {
    public static toDTO(address: Barbershop['address']): BarbershopAddressResponseDto {
        return {
            street: address.street,
            number: address.number,
            district: address.district,
            city: address.city,
            state: address.state
        }
    }
}