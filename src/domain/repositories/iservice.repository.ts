import { Service } from "../entities/service.entity";

export interface IServiceRepository {
    save(service: Service): Promise<void>;
    findById(id: string): Promise<Service | null>;
    findAll(): Promise<Service[]>;
    delete(id: string): Promise<void>;
}