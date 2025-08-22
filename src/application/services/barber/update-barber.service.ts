import { Injectable, NotFoundException } from "@nestjs/common";
import { Barber } from "src/domain/entities/barber.entity";
import { BarberRepositoryImpl } from "src/infrastructure/persistence/repositories/barber.repository.impl";

@Injectable()
export class UpdateBarberService {
    constructor(private readonly repository: BarberRepositoryImpl) { }

    async execute(id: string, barber: Barber): Promise<Barber> {
        const existingBarber = await this.repository.findById(id);
        if (!existingBarber) {
            throw new NotFoundException("Barber not found.");
        }

        existingBarber.specialties = barber.specialties;

        if (barber.bio) existingBarber.bio = barber.bio;

        return await this.repository.save(existingBarber);
    }
}