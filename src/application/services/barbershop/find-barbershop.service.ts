import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Barbershop } from "src/domain/entities/barbershop.entity";
import { IBarbershopRepository } from "src/domain/repositories/ibarbershop.repository";

@Injectable()
export class FindBarbershopService {

    constructor(@Inject('BarbershopRepository') private readonly repository: IBarbershopRepository) { }

    async execute(id: string): Promise<Barbershop> {
        const barbershop = await this.repository.findById(id);
        if (!barbershop) {
            throw new NotFoundException("Barber shop not found.");
        }

        return barbershop;
    }
}