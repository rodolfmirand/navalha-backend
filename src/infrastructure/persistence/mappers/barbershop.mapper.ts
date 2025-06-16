import { Barbershop } from "src/domain/entities/barbershop.entity";
import { BarbershopModel } from "../typeorm/models/barbershop.model";
import { BarberMapper } from "./barber.mapper";
import { ServiceMapper } from "./service.mapper";
import { AppointmentMapper } from "./appointment.mapper";
import { OperatingHoursMapper } from "./operating-hours.mapper";

export class BarbershopMapper {
    public static toDomain(model: BarbershopModel): Barbershop {
        const entity = new Barbershop();

        entity.id = model.id;
        entity.name = model.name;
        entity.address = model.address;
        entity.ownerId = model.ownerId;
        entity.contactEmail = model.contactEmail;
        entity.contactPhone = model.contactPhone;
        entity.description = model.description;
        entity.logoUrl = model.logoUrl;

        if (model.barbers) {
            entity.barbers = model.barbers.map((barberModel) => BarberMapper.toDomain(barberModel));
        }

        if (model.services) {
            entity.services = model.services.map((serviceModel) => ServiceMapper.toDomain(serviceModel));
        }

        if (model.appointments) {
            entity.appointments = model.appointments.map((appointmentsModel) => AppointmentMapper.toDomain(appointmentsModel));
        }

        if (model.operatingHours) {
            entity.operatingHours = model.operatingHours.map((operatingHoursModel) => OperatingHoursMapper.toDomain(operatingHoursModel));
        }

        return entity;
    }

    public static toPersisntece(entity: Barbershop): BarbershopModel {
        const model = new BarbershopModel();

        model.id = entity.id;
        model.ownerId = entity.ownerId;
        model.name = entity.name;
        model.description = entity.description;
        model.logoUrl = entity.logoUrl;
        model.address = entity.address;
        model.contactPhone = entity.contactPhone;
        model.contactEmail = entity.contactEmail;

        return model;
    }
}