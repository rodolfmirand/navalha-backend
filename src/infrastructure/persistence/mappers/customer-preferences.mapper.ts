import { CustomerPreferencesResponseDto } from 'src/infrastructure/http/dtos/customer/customer-preferences/customer-preferences-response.dto';
import { Customer } from '../../../domain/entities/customer.entity';

export class CustomerPreferencesMapper {
    public static toDTO(preferences: Customer['preferences']): CustomerPreferencesResponseDto {
        return {
            booking: preferences?.booking,
            service: preferences?.service
        }
    }
}