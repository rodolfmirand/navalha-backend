import { Injectable, NotFoundException } from "@nestjs/common";
import { Barber } from "src/domain/entities/barber.entity";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class CreateBarberService {

    constructor(private readonly barberRepository: IBarberRepository, private readonly userRepository: IUserRepository) { }

    async execute(barber: Barber): Promise<Barber> {
        const user = await this.userRepository.findById(barber.userId);
        if (!user) {
            throw new NotFoundException("User not found");
        }

        return await this.barberRepository.save(barber);
    }
}