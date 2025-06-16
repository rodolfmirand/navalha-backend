import { Barber } from "src/domain/entities/barber.entity";
import { BarberModel } from "../typeorm/models/barber.model";
import { AppointmentMapper } from "./appointment.mapper";
import { ServiceMapper } from "./service.mapper";

export class BarberMapper {
    public static toDomain(model: BarberModel): Barber {
        const entity = new Barber();

        entity.id = model.id;
        entity.userId = model.userId;
        entity.barbershopId = model.barbershopId;
        entity.specialties = model.specialties || [];
        entity.bio = model.bio;

        if (model.availableServices) {
            entity.availableServices = model.availableServices.map(
                (serviceModel) => ServiceMapper.toDomain(serviceModel),
            );
        }

        if (model.appointments) {
            entity.appointments = model.appointments.map(
                (appointmentModel) => AppointmentMapper.toDomain(appointmentModel),
            );
        }

        return entity;
    }

    public static toPersistence(entity: Barber): BarberModel {
        const model = new BarberModel();

        model.id = entity.id;
        model.userId = entity.userId;
        model.barbershopId = entity.barbershopId;
        model.specialties = entity.specialties;
        model.bio = entity.bio;

        if (entity.availableServices) {
            model.availableServices = entity.availableServices.map(
                (serviceEntity) => ServiceMapper.toPersistence(serviceEntity)
            );
        }

        return model;
    }
}