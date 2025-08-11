import { Injectable } from "@nestjs/common";
import { Barbershop } from "src/domain/entities/barbershop.entity";
import { BarbershopRepositoryImpl } from "src/infrastructure/persistence/repositories/barbershop.repository.impl";

@Injectable()
export class FindAllBarbershopsService {

    constructor(private readonly repository: BarbershopRepositoryImpl) { }

    async execute(): Promise<Barbershop[]> {
        return await this.repository.findAll();
    }
}