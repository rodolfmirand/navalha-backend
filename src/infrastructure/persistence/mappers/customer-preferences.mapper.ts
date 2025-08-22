import { CustomerPreferencesResponseDto } from 'src/infrastructure/http/dtos/customer/customer-preferences/customer-preferences-response.dto';
import { Customer } from '../../../domain/entities/customer.entity';

export class CustomerPreferencesMapper {
    public static toDTO(entity: Customer): CustomerPreferencesResponseDto {
        return {
            booking: {
                preferredBarberId: entity.preferredBarberId,
                preferredServicesId: entity.preferredServicesId,
                sendReminder: entity.sendReminder
            },
            service: {
                allergiesOrSensitivities: entity.allergiesOrSensitivities,
                chatLevel: entity.chatLevel,
                generalNotes: entity.generalNotes
            }
        }
    }
}