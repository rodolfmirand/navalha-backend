import { Customer } from 'src/domain/entities/customer.entity';
import { CustomerModel } from '../typeorm/models/customer.model';
import { AppointmentMapper } from './appointment.mapper';
import { CreateCustomerDto } from 'src/infrastructure/http/dtos/customer/create-customer.dto';
import { CustomerResponseDto } from 'src/infrastructure/http/dtos/customer/customer-response.dto';
import { CustomerPreferencesMapper } from './customer-preferences.mapper';
import { UpdateCustomerDto } from 'src/infrastructure/http/dtos/customer/update-customer.dto';

export class CustomerMapper {
  public static toDomain(model: CustomerModel): Customer {
    const entity = new Customer();

    entity.id = model.id;
    entity.userId = model.userId;

    if (model.preferredBarberId) {
      entity.preferredBarberId = model.preferredBarberId;
    }

    if (model.preferredServicesId) {
      entity.preferredServicesId = model.preferredServicesId;
    }

    entity.sendReminder = model.sendReminder;
    entity.chatLevel = model.chatLevel;
    entity.allergiesOrSensitivities = model.allergiesOrSensitivities;
    entity.generalNotes = model.generalNotes;

    if (model.appointments) {
      entity.appointments = model.appointments.map((appointmentModel) => AppointmentMapper.toDomain(appointmentModel));
    }

    return entity;
  }

  public static toPersistence(entity: Customer): CustomerModel {
    const model = new CustomerModel();

    model.userId = entity.userId;
    model.preferredBarberId = entity.preferredBarberId;
    model.preferredServicesId = entity.preferredServicesId;
    model.sendReminder = entity.sendReminder;
    model.chatLevel = entity.chatLevel;
    model.allergiesOrSensitivities = entity.allergiesOrSensitivities;
    model.generalNotes = entity.generalNotes;

    return model;
  }

  public static fromCreateDTO(dto: CreateCustomerDto): Customer {
    return {
      id: "",
      userId: dto.userId,
      preferredBarberId: dto.preferredBarberId,
      preferredServicesId: dto.preferredServicesId,
      sendReminder: dto.sendReminder,
      allergiesOrSensitivities: dto.allergiesOrSensitivities,
      chatLevel: dto.chatLevel,
      generalNotes: dto.generalNotes,
      appointments: []
    }
  }

  public static fromUpdateDTO(dto: UpdateCustomerDto): Customer {
    const entity = new Customer();

    if (!dto.preferredBarberId) { entity.preferredBarberId = dto.preferredBarberId }
    if (!dto.preferredServicesId) { entity.preferredServicesId = dto.preferredServicesId }
    if (!dto.sendReminder) { entity.sendReminder = dto.sendReminder }
    if (!dto.allergiesOrSensitivities) { entity.allergiesOrSensitivities = dto.allergiesOrSensitivities }
    if (!dto.chatLevel) { entity.chatLevel = dto.chatLevel }
    if (!dto.generalNotes) { entity.generalNotes }

    return entity;
  }

  public static toDTO(entity: Customer): CustomerResponseDto {
    return {
      id: entity.id,
      userId: entity.userId,

      appointments: entity.appointments?.map(AppointmentMapper.toDTO),

      preferredBarberId: entity.preferredBarberId,
      preferredServicesId: entity.preferredServicesId,
      sendReminder: entity.sendReminder,
      chatLevel: entity.chatLevel,
      allergiesOrSensitivities: entity.allergiesOrSensitivities,
      generalNotes: entity.generalNotes,
    }
  }
}