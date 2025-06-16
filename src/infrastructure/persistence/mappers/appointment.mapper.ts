import { Appointment } from "src/domain/entities/appointment.entity";
import { AppointmentModel } from "../typeorm/models/appointment.model";

export class AppointmentMapper {
    public static toDomain(model: AppointmentModel): Appointment {
        const entity = new Appointment();

        entity.id = model.id;
        entity.clientId = model.clientId;
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
        model.clientId = entity.clientId;
        model.barberId = entity.barberId;
        model.barbershopId = entity.barbershopId;
        model.serviceId = entity.serviceId;
        model.status = entity.status;
        model.startTime = entity.startTime;
        model.priceInCents = entity.priceInCents;

        return model;
    }
}