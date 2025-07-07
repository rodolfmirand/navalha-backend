import { Barber } from "src/domain/entities/barber.entity";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";

export class BarbershopRepositoryImpl implements IBarberRepository {
    save(barber: Barber): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Barber | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Barber[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}