import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Barber } from "src/domain/entities/barber.entity";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";
import { BarberModel } from '../typeorm/models/barber.model';
import { Repository } from "typeorm";
import { BarberMapper } from "../mappers/barber.mapper";

@Injectable()
export class BarberRepositoryImpl implements IBarberRepository {

    constructor(@InjectRepository(BarberModel) private readonly repository: Repository<BarberModel>) { }

    async save(barber: Barber): Promise<Barber> {
        const model = BarberMapper.toPersistence(barber);
        const entity = await this.repository.save(model);
        return BarberMapper.toDomain(entity);
    }

    async findById(id: string): Promise<Barber | null> {
        const model = await this.repository.findOne({ where: { id }, relations: ['barbershop', 'availableServices', 'appointments'] });
        return model ? BarberMapper.toDomain(model) : null;
    }

    async findAll(): Promise<Barber[]> {
        const models = await this.repository.find({ relations: ['barbershop', 'availableServices', 'appointments'] });
        return models.map(BarberMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}