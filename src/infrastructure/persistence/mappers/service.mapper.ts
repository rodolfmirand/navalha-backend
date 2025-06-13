import { Service } from "src/domain/entities/service.entity";
import { ServiceModel } from "../typeorm/models/service.model";

export class ServiceMapper {
    public static toDomain(serviceModel: ServiceModel): Service {
        const serviceEntity = new Service();

        serviceEntity.id = serviceModel.id;
        serviceEntity.barbershopId = serviceModel.barbershopId;
        serviceEntity.name = serviceModel.name;
        serviceEntity.description = serviceModel.description;
        serviceEntity.priceInCents = serviceModel.priceInCents;
        serviceEntity.durationInMinutes = serviceModel.durationInMinutes;
        serviceEntity.isActive = serviceModel.isActive;

        return serviceEntity;
    }

    public static toPersistence(serviceEntity: Service): ServiceModel {
        const serviceModel = new ServiceModel();

        serviceModel.id = serviceEntity.id;
        serviceModel.barbershopId = serviceEntity.barbershopId;
        serviceModel.name = serviceEntity.name;
        serviceModel.description = serviceEntity.description;
        serviceModel.priceInCents = serviceEntity.priceInCents;
        serviceModel.durationInMinutes = serviceEntity.durationInMinutes;
        serviceModel.isActive = serviceEntity.isActive;

        return serviceModel;
    }
}