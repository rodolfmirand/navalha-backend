import { Client } from 'src/domain/entities/client.entity';
import { ClientModel } from '../typeorm/models/client.model';
import { AppointmentMapper } from './appointment.mapper';
export class ClientMapper {
    static toDomain(model: ClientModel): Client {
        const entity = new Client();

        entity.id = model.id;
        entity.userId = model.userId;

        if(model.preferences) {
            entity.preferences = model.preferences;
        }

        if(model.appointments){
            entity.appointments = model.appointments.map((appointmentModel) => AppointmentMapper.toDomain(appointmentModel));
        }

        return entity;
    }

    public static toPersistence(entity: Client): ClientModel {
    const model = new ClientModel();

    model.id = entity.id;
    model.userId = entity.userId;
    
    if (entity.preferences) {
      model.preferences = entity.preferences;
    }

    return model;
  }
}