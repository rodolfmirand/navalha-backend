import { Injectable, NotFoundException } from "@nestjs/common";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";

@Injectable()
export class DeleteBarberService {

    constructor(private readonly repository: IBarberRepository) { }

    async execute(id: string): Promise<void> {
        const barber = await this.repository.findById(id);
        if (!barber) {
            throw new NotFoundException("Barber not found");
        }

        await this.repository.delete(id);
    }
}