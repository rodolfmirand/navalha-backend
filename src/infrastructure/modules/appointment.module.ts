import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppointmentController } from "../http/controllers/appointment.controller";
import { CreateAppointmentService } from "src/application/services/appointment/create-appointment.service";
import { FindAppointmentService } from "src/application/services/appointment/find-appointment.service";
import { FindAllAppointmentsService } from "src/application/services/appointment/find-all-appointments.service";
import { DeleteAppointmentService } from "src/application/services/appointment/delete-appointment.service";
import { UpdateAppointmentService } from "src/application/services/appointment/update-appointment.service";
import { CustomerRepositoryImpl } from "../persistence/repositories/customer.repository.impl";
import { BarberRepositoryImpl } from "../persistence/repositories/barber.repository.impl";
import { BarbershopRepositoryImpl } from "../persistence/repositories/barbershop.repository.impl";
import { ServiceRepositoryImpl } from "../persistence/repositories/service.repository.impl";
import { AppointmentModel } from "../persistence/typeorm/models/appointment.model";
import { BarberModel } from "../persistence/typeorm/models/barber.model";
import { CustomerModel } from "../persistence/typeorm/models/customer.model";
import { ServiceModel } from "../persistence/typeorm/models/service.model";
import { BarbershopModel } from "../persistence/typeorm/models/barbershop.model";
import { AppointmentRepositoryImpl } from "../persistence/repositories/appointment.repository.impl";

@Module({
    imports: [TypeOrmModule.forFeature([AppointmentModel, BarberModel, CustomerModel, ServiceModel, BarbershopModel])],
    controllers: [AppointmentController],
    providers: [CreateAppointmentService, FindAppointmentService, FindAllAppointmentsService, DeleteAppointmentService, UpdateAppointmentService, AppointmentRepositoryImpl, CustomerRepositoryImpl, BarberRepositoryImpl, BarbershopRepositoryImpl, ServiceRepositoryImpl,
        {
            provide: 'AppointmentRepository',
            useClass: AppointmentRepositoryImpl
        },
        {
            provide: 'CustomerRepository',
            useClass: CustomerRepositoryImpl
        },
        {
            provide: 'BarberRepository',
            useClass: BarberRepositoryImpl
        },
        {
            provide: 'BarbershopRepository',
            useClass: BarbershopRepositoryImpl
        },
        {
            provide: 'ServiceRepository',
            useClass: ServiceRepositoryImpl
        }
    ]
})
export class AppointmentModule { }