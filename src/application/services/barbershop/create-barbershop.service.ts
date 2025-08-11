import { Injectable, NotFoundException } from "@nestjs/common";
import { Barbershop } from "src/domain/entities/barbershop.entity";
import { BarbershopRepositoryImpl } from "src/infrastructure/persistence/repositories/barbershop.repository.impl";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";

@Injectable()
export class CreateBarbershopService {

    constructor(private readonly barbershopRepository: BarbershopRepositoryImpl,
        private readonly userRepository: UserRepositoryImpl,
    ) { }

    async execute(barbershop: Barbershop): Promise<Barbershop> {
        const owner = await this.userRepository.findById(barbershop.ownerId);
        if (!owner) {
            throw new NotFoundException("Owner not found.");
        }

        return await this.barbershopRepository.save(barbershop);
    }
}