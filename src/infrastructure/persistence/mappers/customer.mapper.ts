import { Customer } from 'src/domain/entities/customer.entity';
import { CustomerModel } from '../typeorm/models/customer.model';
import { AppointmentMapper } from './appointment.mapper';

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
}