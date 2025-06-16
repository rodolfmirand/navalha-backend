import { Service } from "src/domain/entities/service.entity";
import { ServiceModel } from "../typeorm/models/service.model";

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
}