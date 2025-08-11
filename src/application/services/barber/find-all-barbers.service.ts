import { Injectable } from "@nestjs/common";
import { Barber } from "src/domain/entities/barber.entity";
import { BarberRepositoryImpl } from "src/infrastructure/persistence/repositories/barber.repository.impl";

@Injectable()
export class FindAllBarbersService {

    constructor(private readonly repository: BarberRepositoryImpl) { }

    async execute(): Promise<Barber[]> {
        return await this.repository.findAll();
    }
}