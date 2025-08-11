import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BarberModel } from "../persistence/typeorm/models/barber.model";
import { CreateBarberService } from "src/application/services/barber/create-barber.service";
import { FindBarberService } from "src/application/services/barber/find-barber.service";
import { FindAllBarbersService } from "src/application/services/barber/find-all-barbers.service";
import { DeleteBarberService } from "src/application/services/barber/delete-barber.service";
import { UpdateBarberService } from "src/application/services/barber/update-barber.service";
import { BarberRepositoryImpl } from "../persistence/repositories/barber.repository.impl";
import { BarberController } from "../http/controllers/barber.controller";
import { UserRepositoryImpl } from "../persistence/repositories/user.repository.impl";
import { UserModel } from "../persistence/typeorm/models/user.model";
import { BarbershopRepositoryImpl } from "../persistence/repositories/barbershop.repository.impl";
import { BarbershopModel } from "../persistence/typeorm/models/barbershop.model";

@Module({
    imports: [TypeOrmModule.forFeature([BarberModel, UserModel, BarbershopModel])],
    controllers: [BarberController],
    providers: [CreateBarberService, FindBarberService, FindAllBarbersService, DeleteBarberService, UpdateBarberService, BarberRepositoryImpl,
        UserRepositoryImpl, BarbershopRepositoryImpl]
})
export class BarberModule { }