import { Inject, Injectable } from "@nestjs/common";
import { Barbershop } from "src/domain/entities/barbershop.entity";
import { IBarbershopRepository } from "src/domain/repositories/ibarbershop.repository";

@Injectable()
export class FindAllBarbershopsService {

    constructor(@Inject('BarbershopRepository') private readonly repository: IBarbershopRepository) { }

    async execute(): Promise<Barbershop[]> {
        return await this.repository.findAll();
    }
}