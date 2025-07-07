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

    async save(barber: Barber): Promise<void> {
        const model = BarberMapper.toPersistence(barber);
        await this.repository.save(model);
    }

    async findById(id: string): Promise<Barber | null> {
        const model = await this.repository.findOneBy({ id });
        return model ? BarberMapper.toDomain(model) : null;
    }

    async findAll(): Promise<Barber[]> {
        const entities = await this.repository.find();
        return entities.map(BarberMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}