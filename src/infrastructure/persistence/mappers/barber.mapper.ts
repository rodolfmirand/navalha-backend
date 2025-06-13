import { Barber } from "src/domain/entities/barber.entity";
import { BarberModel } from "../typeorm/models/barber.model";
import { AppointmentMapper } from "./appointment.mapper";
import { ServiceMapper } from "./service.mapper";

export class BarberMapper {
    public static toDomain(barberModel: BarberModel): Barber {
        const barberEntity = new Barber();

        barberEntity.id = barberModel.id;
        barberEntity.userId = barberModel.userId;
        barberEntity.barbershopId = barberModel.barbershopId;
        barberEntity.specialties = barberModel.specialties || [];
        barberEntity.bio = barberModel.bio;

        if (barberModel.availableServices) {
            barberEntity.availableServices = barberModel.availableServices.map(
                (serviceModel) => ServiceMapper.toDomain(serviceModel),
            );
        }

        if (barberModel.appointments) {
            barberEntity.appointments = barberModel.appointments.map(
                (appointmentModel) => AppointmentMapper.toDomain(appointmentModel),
            );
        }

        return barberEntity;
    }

    public static toPersistence(barberEntity: Barber): BarberModel {
        const barberModel = new BarberModel();

        barberModel.id = barberEntity.id;
        barberModel.userId = barberEntity.userId;
        barberModel.barbershopId = barberEntity.barbershopId;
        barberModel.specialties = barberEntity.specialties;
        barberModel.bio = barberEntity.bio;

        if (barberEntity.availableServices) {
            barberModel.availableServices = barberEntity.availableServices.map(
                (serviceEntity) => ServiceMapper.toPersistence(serviceEntity)
            );
        }

        return barberModel;
    }
}