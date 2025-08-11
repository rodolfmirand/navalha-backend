import { Injectable, NotFoundException } from "@nestjs/common";
import { BarbershopRepositoryImpl } from "src/infrastructure/persistence/repositories/barbershop.repository.impl";

@Injectable()
export class DeleteBarbershopService {

    constructor(private readonly repository: BarbershopRepositoryImpl) { }

    async execute(id: string): Promise<void> {
        const barbershop = await this.repository.findById(id);
        if (!barbershop) {
            throw new NotFoundException("Barber shop not found.")
        }

        await this.repository.delete(id);
    }
}