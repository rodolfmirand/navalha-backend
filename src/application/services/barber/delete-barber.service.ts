import { Injectable, NotFoundException } from "@nestjs/common";
import { BarberRepositoryImpl } from "src/infrastructure/persistence/repositories/barber.repository.impl";

@Injectable()
export class DeleteBarberService {

    constructor(private readonly repository: BarberRepositoryImpl) { }

    async execute(id: string): Promise<void> {
        const barber = await this.repository.findById(id);
        if (!barber) {
            throw new NotFoundException("Barber not found");
        }

        await this.repository.delete(id);
    }
}