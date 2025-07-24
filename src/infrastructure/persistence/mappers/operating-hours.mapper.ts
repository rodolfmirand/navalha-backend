import { OperatingHours } from 'src/domain/entities/operating-hours.entity';
import { OperatingHoursModel } from '../typeorm/models/operating-hours.model';
import { OperatingHoursDto } from 'src/infrastructure/http/dtos/barbershop/operating-hours/operating-hours.dto';
import { OperatingHoursResponseDto } from 'src/infrastructure/http/dtos/barbershop/operating-hours/operating-hours-response.dto';
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

    public static fromDTO(dto: OperatingHoursDto): OperatingHours {
        const entity = new OperatingHours();

        entity.dayOfWeek = dto.dayOfWeek;
        entity.openingTime = dto.openingTime;
        entity.closingTime = dto.closingTime;

        return entity;
    }

    public static toDTO(entity: OperatingHours): OperatingHoursResponseDto {
        return {
            id: entity.id,
            barbershopId: entity.barbershopId,

            dayOfWeek: entity.dayOfWeek,
            openingTime: entity.openingTime,
            closingTime: entity.closingTime
        }
    }
}