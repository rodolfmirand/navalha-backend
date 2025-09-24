import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BarbershopModel } from "../persistence/typeorm/models/barbershop.model";
import { UserModel } from "../persistence/typeorm/models/user.model";
import { BarberModel } from "../persistence/typeorm/models/barber.model";
import { BarbershopController } from "../http/controllers/barbershop.controller";
import { CreateBarbershopService } from "src/application/services/barbershop/create-barbershop.service";
import { FindBarbershopService } from "src/application/services/barbershop/find-barbershop.service";
import { FindAllBarbershopsService } from "src/application/services/barbershop/find-all-barbershops.service";
import { DeleteBarbershopService } from "src/application/services/barbershop/delete-barbershop.service";
import { BarbershopRepositoryImpl } from "../persistence/repositories/barbershop.repository.impl";
import { UserRepositoryImpl } from "../persistence/repositories/user.repository.impl";

@Module({
    imports: [TypeOrmModule.forFeature([BarbershopModel, UserModel, BarberModel])],
    controllers: [BarbershopController],
    providers: [CreateBarbershopService, FindBarbershopService, FindAllBarbershopsService, DeleteBarbershopService, BarbershopRepositoryImpl,
        UserRepositoryImpl,
        {
            provide: 'BarbershopRepository',
            useClass: BarbershopRepositoryImpl
        },
        {
            provide: 'UserRepository',
            useClass: UserRepositoryImpl
        }
    ],
    exports: [BarbershopRepositoryImpl]
})
export class BarbershopModule { }