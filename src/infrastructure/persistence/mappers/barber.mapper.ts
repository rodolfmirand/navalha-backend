import { Barber } from "src/domain/entities/barber.entity";
import { BarberModel } from "../typeorm/models/barber.model";
import { AppointmentMapper } from "./appointment.mapper";
import { ServiceMapper } from "./service.mapper";
import { CreateBarberDto } from "src/infrastructure/http/dtos/barber/create-barber.dto";
import { BarberResponseDto } from "src/infrastructure/http/dtos/barber/barber-response.dto";
import { Service } from "src/domain/entities/service.entity";

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

    public static fromDTO(dto: CreateBarberDto): Barber {
        const barber = new Barber();

        barber.barbershopId = dto.barbershopId;
        barber.specialties = dto.specialties;
        barber.bio = dto.bio;

        return barber;
    }

    public static toDTO(entity: Barber): BarberResponseDto {
        return {
            id: entity.id,
            userId: entity.userId,
            barbershopId: entity.barbershopId,
            specialties: entity.specialties,
            bio: entity.bio || '',

            availableServices: entity.availableServices?.map(ServiceMapper.toDTO) || [],

            appointments: entity.appointments?.map(AppointmentMapper.toDTO) || []
        }
    }
}