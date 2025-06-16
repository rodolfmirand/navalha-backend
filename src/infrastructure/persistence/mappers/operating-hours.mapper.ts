import { OperatingHours } from 'src/domain/entities/operating-hours.entity';
import { OperatingHoursModel } from '../typeorm/models/operating-hours.model';
export class OperatingHoursMapper {
    public static toDomain(model: OperatingHoursModel): OperatingHours {
        const entity = new OperatingHours();

        entity.id = model.id;
        entity.dayOfWeek = model.dayOfWeek;
        entity.openingTime = model.openingTime;
        entity.closingTime = model.closingTime;
        entity.barbershopId = model.barbershopId;

        return entity;
    }

    public static toPersistence(entity: OperatingHours): OperatingHoursModel {
        const model = new OperatingHoursModel();

        model.id = entity.id;
        model.dayOfWeek = entity.dayOfWeek;
        model.openingTime = entity.openingTime;
        model.closingTime = entity.closingTime;
        model.barbershopId = entity.barbershopId;
        
        return model;
    }
}