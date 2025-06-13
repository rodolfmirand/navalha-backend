import { Client } from 'src/domain/entities/client.entity';
import { ClientModel } from '../typeorm/models/client.model';
import { AppointmentMapper } from './appointment.mapper';
export class ClientMapper {
    static toDomain(clientModel: ClientModel): Client {
        const clientEntity = new Client();

        clientEntity.id = clientModel.id;
        clientEntity.userId = clientModel.userId;

        if(clientModel.preferences) {
            clientEntity.preferences = clientModel.preferences;
        }

        if(clientModel.appointments){
            clientEntity.appointments = clientModel.appointments.map((appointmentModel) => AppointmentMapper.toDomain(appointmentModel));
        }

        return clientEntity;
    }

    public static toPersistence(clientEntity: Client): ClientModel {
    const clientModel = new ClientModel();

    clientModel.id = clientEntity.id;
    clientModel.userId = clientEntity.userId;
    
    if (clientEntity.preferences) {
      clientModel.preferences = clientEntity.preferences;
    }

    return clientModel;
  }
}