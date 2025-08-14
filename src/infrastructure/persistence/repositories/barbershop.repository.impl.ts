import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BarbershopModel } from "../typeorm/models/barbershop.model";
import { Repository } from "typeorm";
import { BarbershopMapper } from "../mappers/barbershop.mapper";
import { IBarbershopRepository } from "src/domain/repositories/ibarbershop.repository";
import { Barbershop } from "src/domain/entities/barbershop.entity";

@Injectable()
export class BarbershopRepositoryImpl implements IBarbershopRepository {

    constructor(@InjectRepository(BarbershopModel) private readonly repository: Repository<BarbershopModel>) { }

    async save(barbershop: Barbershop): Promise<Barbershop> {
        const model = BarbershopMapper.toPersistence(barbershop);
        const entity = await this.repository.save(model);
        return BarbershopMapper.toDomain(entity);
    }

    async findById(id: string): Promise<Barbershop | null> {
        const models = await this.repository.findOne({ where: { id }, relations: ['barbers', 'services', 'operatingHours', 'appointments'] });
        return models ? BarbershopMapper.toDomain(models) : null;
    }

    async findAll(): Promise<Barbershop[]> {
        const models = await this.repository.find({ relations: ['barbers', 'services', 'operatingHours', 'appointments'] });
        return models.map(BarbershopMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}