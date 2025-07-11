import { Injectable } from "@nestjs/common";
import { Barber } from "src/domain/entities/barber.entity";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";

@Injectable()
export class FindAllBarbersService {

    constructor(private readonly repository: IBarberRepository) { }

    async execute(): Promise<Barber[]> {
        return await this.repository.findAll();
    }
}