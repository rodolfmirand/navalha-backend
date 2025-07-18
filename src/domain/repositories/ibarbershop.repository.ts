import { Barbershop } from "../entities/barbershop.entity";

export interface IBarbershopRepository {
    save(barbershop: Barbershop): Promise<Barbershop>;
    findById(id: string): Promise<Barbershop | null>;
    findAll(): Promise<Barbershop[]>;
    delete(id: string): Promise<void>;
}