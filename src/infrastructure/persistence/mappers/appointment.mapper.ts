import { Appointment } from "src/domain/entities/appointment.entity";
import { AppointmentModel } from "../typeorm/models/appointment.model";
import { AppointmentResponseDto } from '../../http/dtos/appointment/appointment-response.dto';

export class AppointmentMapper {
    public static toDomain(model: AppointmentModel): Appointment {
        const entity = new Appointment();

        entity.id = model.id;
        entity.customerId = model.customerId;
        entity.barberId = model.barberId;
        entity.barbershopId = model.barbershopId;
        entity.serviceId = model.serviceId;
        entity.status = model.status;
        entity.startTime = model.startTime;
        entity.priceInCents = model.priceInCents;

        return entity;
    }

    public static toPersistence(entity: Appointment): AppointmentModel {
        const model = new AppointmentModel();

        model.id = entity.id;
        model.customerId = entity.customerId;
        model.barberId = entity.barberId;
        model.barbershopId = entity.barbershopId;
        model.serviceId = entity.serviceId;
        model.status = entity.status;
        model.startTime = entity.startTime;
        model.priceInCents = entity.priceInCents;

        return model;
    }

    public static toDTO(entity: Appointment): AppointmentResponseDto {
        return {
            id: entity.id,
            customerId: entity.customerId,
            barberId: entity.barberId,
            barbershopId: entity.barbershopId,
            serviceId: entity.serviceId,
            
            priceInCents: entity.priceInCents,

            status: entity.status,

            startTime: entity.startTime
        }
    }
}