import { Injectable, NotFoundException } from "@nestjs/common";
import { Barbershop } from "src/domain/entities/barbershop.entity";
import { IBarbershopRepository } from "src/domain/repositories/ibarbershop.repository";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class CreateBarbershopService {

    constructor(private readonly barbershopRepository: IBarbershopRepository,
        private readonly userRepository: IUserRepository,
    ) { }

    async execute(barbershop: Barbershop): Promise<Barbershop> {
        const owner = await this.userRepository.findById(barbershop.ownerId);
        if (!owner) {
            throw new NotFoundException("Owner not found.");
        }

        return await this.barbershopRepository.save(barbershop);
    }
}