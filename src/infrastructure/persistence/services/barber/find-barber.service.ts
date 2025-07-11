import { Injectable, NotFoundException } from "@nestjs/common";
import { Barber } from "src/domain/entities/barber.entity";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";

@Injectable()
export class FindBarberService {

    constructor(private readonly repository: IBarberRepository) { }

    async execute(id: string): Promise<Barber> {
        const barber = await this.repository.findById(id);
        if (!barber) {
            throw new NotFoundException("Barber not found.");
        }

        return barber;
    }
}