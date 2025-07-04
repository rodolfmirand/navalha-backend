import { Client } from "../entities/client.entity";

export interface IClientRepository {
    save(client: Client): Promise<void>;
    findById(id: string): Promise<Client | null>;
    findAll(): Promise<Client[]>;
    delete(id: string): Promise<void>;
}