import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Barber } from "src/domain/entities/barber.entity";
import { UserRole } from "src/domain/enums/user-role.enum";
import { IBarberRepository } from "src/domain/repositories/ibarber.repository";
import { IBarbershopRepository } from "src/domain/repositories/ibarbershop.repository";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

@Injectable()
export class CreateBarberService {

    constructor(@Inject('BarberRepository') private readonly barberRepository: IBarberRepository,
        @Inject('UserRepository') private readonly userRepository: IUserRepository,
        @Inject('BarbershopRepository') private readonly barbershopRepository: IBarbershopRepository) { }

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