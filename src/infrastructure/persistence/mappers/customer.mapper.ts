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

    if (model.preferences) {
      entity.preferences = model.preferences;
    }

    if (model.appointments) {
      entity.appointments = model.appointments.map((appointmentModel) => AppointmentMapper.toDomain(appointmentModel));
    }

    return entity;
  }

  public static toPersistence(entity: Customer): CustomerModel {
    const model = new CustomerModel();

    model.id = entity.id;
    model.userId = entity.userId;

    if (entity.preferences) {
      model.preferences = entity.preferences;
    }

    return model;
  }

  public static fromCreateDTO(dto: CreateCustomerDto): Customer {
    const entity = new CustomerModel();

    entity.userId = dto.userId;

    if (dto.preferences) {
      entity.preferences = dto.preferences;
    }

    return entity;
  }

  public static fromUpdateDTO(dto: UpdateCustomerDto): Customer {
    const entity = new Customer();

    entity.preferences = dto.preferences;

    return entity;
  }

  public static toDTO(entity: Customer): CustomerResponseDto {
    return {
      id: entity.id,

      appointments: entity.appointments?.map(AppointmentMapper.toDTO),

      preferences: CustomerPreferencesMapper.toDTO(entity.preferences)
    }
  }
}