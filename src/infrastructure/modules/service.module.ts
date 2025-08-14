import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceModel } from "../persistence/typeorm/models/service.model";
import { BarbershopModel } from "../persistence/typeorm/models/barbershop.model";
import { ServiceController } from "../http/controllers/service.controller";
import { CreateServiceService } from "src/application/services/service/create-service.service";
import { FindServiceService } from "src/application/services/service/find-service.service";
import { FindAllServicesService } from "src/application/services/service/find-all-services.service";
import { DeleteServiceService } from "src/application/services/service/delete-service.service";
import { ServiceRepositoryImpl } from "../persistence/repositories/service.repository.impl";
import { BarbershopRepositoryImpl } from "../persistence/repositories/barbershop.repository.impl";
import { AddServiceToBarberService } from "src/application/services/service/add-service-to-barber.service";
import { BarberModel } from "../persistence/typeorm/models/barber.model";
import { BarberRepositoryImpl } from '../persistence/repositories/barber.repository.impl';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceModel, BarbershopModel, BarberModel])],
    controllers: [ServiceController],
    providers: [CreateServiceService, FindServiceService, FindAllServicesService, DeleteServiceService, AddServiceToBarberService, ServiceRepositoryImpl,
        BarberRepositoryImpl, BarbershopRepositoryImpl]
})
export class ServiceModule { }