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

@Module({
    imports: [TypeOrmModule.forFeature([ServiceModel, BarbershopModel])],
    controllers: [ServiceController],
    providers: [CreateServiceService, FindServiceService, FindAllServicesService, DeleteServiceService, ServiceRepositoryImpl,
        BarbershopRepositoryImpl]
})
export class ServiceModule { }