import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Service } from "src/domain/entities/service.entity";
import { IServiceRepository } from "src/domain/repositories/iservice.repository";
import { ServiceModel } from "../typeorm/models/service.model";
import { Repository } from "typeorm";
import { ServiceMapper } from "../mappers/service.mapper";

@Injectable()
export class ServiceRepositoryImpl implements IServiceRepository {

    constructor(@InjectRepository(ServiceModel) private readonly repository: Repository<ServiceModel>) { }

    async save(service: Service): Promise<void> {
        const model = ServiceMapper.toPersistence(service);
        await this.repository.save(model);
    }

    async findById(id: string): Promise<Service | null> {
        const entity = await this.repository.findOneBy({ id });
        return entity ? ServiceMapper.toDomain(entity) : null;
    }

    async findAll(): Promise<Service[]> {
        const entities = await this.repository.find();
        return entities.map(ServiceMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}