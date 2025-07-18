import { Barber } from "../entities/barber.entity";

export interface IBarberRepository {
    save(barber: Barber): Promise<Barber>;
    findById(id: string): Promise<Barber | null>;
    findAll(): Promise<Barber[]>;
    delete(id: string): Promise<void>;
}