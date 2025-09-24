import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IBarbershopRepository } from "src/domain/repositories/ibarbershop.repository";

@Injectable()
export class DeleteBarbershopService {

    constructor(@Inject('BarbershopRepository') private readonly repository: IBarbershopRepository) { }

    async execute(id: string): Promise<void> {
        const barbershop = await this.repository.findById(id);
        if (!barbershop) {
            throw new NotFoundException("Barber shop not found.")
        }

        await this.repository.delete(id);
    }
}