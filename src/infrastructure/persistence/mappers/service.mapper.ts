import { Service } from "src/domain/entities/service.entity";
import { ServiceModel } from "../typeorm/models/service.model";
import { CreateServiceDto } from "src/infrastructure/http/dtos/service/create-service.dto";
import { ServiceResponseDto } from "src/infrastructure/http/dtos/service/service-response.dto";

export class ServiceMapper {
    public static toDomain(model: ServiceModel): Service {
        const entity = new Service();

        entity.id = model.id;
        entity.barbershopId = model.barbershopId;
        entity.name = model.name;
        entity.description = model.description;
        entity.priceInCents = model.priceInCents;
        entity.durationInMinutes = model.durationInMinutes;
        entity.isActive = model.isActive;

        return entity;
    }

    public static toPersistence(entity: Service): ServiceModel {
        const model = new ServiceModel();

        model.id = entity.id;
        model.barbershopId = entity.barbershopId;
        model.name = entity.name;
        model.description = entity.description;
        model.priceInCents = entity.priceInCents;
        model.durationInMinutes = entity.durationInMinutes;
        model.isActive = entity.isActive;

        return model;
    }

    public static fromDTO(dto: CreateServiceDto): Service {
        const entity = new Service();

        entity.barbershopId = dto.barbershopId;
        entity.name = dto.name;
        entity.description = dto.description;
        entity.priceInCents = dto.priceInCents;
        entity.durationInMinutes = dto.durationInMinutes || 30;
        entity.isActive = true;

        return entity;
    }

    public static toDTO(entity: Service): ServiceResponseDto {
        return {
            id: entity.id,
            barbershopId: entity.barbershopId,

            name: entity.name,
            description: entity.description || '',

            priceInCents: entity.priceInCents,
            durationInMinutes: entity.durationInMinutes,

            isActive: entity.isActive
        }
    }
}