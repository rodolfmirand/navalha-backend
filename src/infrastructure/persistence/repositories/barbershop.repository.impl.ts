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
        const models = await this.repository.findOneBy({ id });
        return models ? BarbershopMapper.toDomain(models) : null;
    }

    async findAll(): Promise<Barbershop[]> {
        const models = await this.repository.find();
        return models.map(BarbershopMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}