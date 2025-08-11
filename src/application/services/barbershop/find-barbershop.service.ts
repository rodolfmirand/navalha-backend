import { Injectable, NotFoundException } from "@nestjs/common";
import { Barbershop } from "src/domain/entities/barbershop.entity";
import { BarbershopRepositoryImpl } from "src/infrastructure/persistence/repositories/barbershop.repository.impl";

@Injectable()
export class FindBarbershopService {

    constructor(private readonly repository: BarbershopRepositoryImpl) { }

    async execute(id: string): Promise<Barbershop> {
        const barbershop = await this.repository.findById(id);
        if (!barbershop) {
            throw new NotFoundException("Barber shop not found.");
        }

        return barbershop;
    }
}