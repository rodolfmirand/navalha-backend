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

    async save(barbershop: Barbershop): Promise<void> {
        const model = BarbershopMapper.toPersistence(barbershop);
        await this.repository.save(model);
    }

    async findById(id: string): Promise<Barbershop | null> {
        const entity = await this.repository.findOneBy({ id });
        return entity ? BarbershopMapper.toDomain(entity) : null;
    }

    async findAll(): Promise<Barbershop[]> {
        const entities = await this.repository.find();
        return entities.map(BarbershopMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}