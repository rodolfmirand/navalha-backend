import { Service } from "src/domain/entities/service.entity";
import { IServiceRepository } from "src/domain/repositories/iservice.repository";

export class ServiceRepositoryImpl implements IServiceRepository {
    save(service: Service): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Service | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Service[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}