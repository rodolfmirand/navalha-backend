import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Barber } from "src/domain/entities/barber.entity";
import { UserRole } from "src/domain/enums/user-role.enum";
import { BarberRepositoryImpl } from "src/infrastructure/persistence/repositories/barber.repository.impl";
import { BarbershopRepositoryImpl } from "src/infrastructure/persistence/repositories/barbershop.repository.impl";
import { UserRepositoryImpl } from "src/infrastructure/persistence/repositories/user.repository.impl";

@Injectable()
export class CreateBarberService {

    constructor(private readonly barberRepository: BarberRepositoryImpl,
        private readonly userRepository: UserRepositoryImpl,
        private readonly barbershopRepository: BarbershopRepositoryImpl) { }

    async execute(barber: Barber): Promise<Barber> {
        const user = await this.userRepository.findById(barber.userId);
        if (!user) {
            throw new NotFoundException("User not found.");
        }
        if (user.role !== UserRole.BARBER) {
            throw new BadRequestException("User must be a barber.");
        }

        const barbershop = await this.barbershopRepository.findById(barber.barbershopId);
        if (!barbershop) {
            throw new NotFoundException("Barbershop not found.")
        }

        return await this.barberRepository.save(barber);
    }
}