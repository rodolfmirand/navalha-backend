import { Injectable, NotFoundException } from "@nestjs/common";
import { Barber } from "src/domain/entities/barber.entity";
import { BarberRepositoryImpl } from "src/infrastructure/persistence/repositories/barber.repository.impl";

@Injectable()
export class FindBarberService {

    constructor(private readonly repository: BarberRepositoryImpl) { }

    async execute(id: string): Promise<Barber> {
        const barber = await this.repository.findById(id);
        if (!barber) {
            throw new NotFoundException("Barber not found.");
        }

        return barber;
    }
}