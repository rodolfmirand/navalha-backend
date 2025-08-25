import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './infrastructure/persistence/typeorm/models/user.model';
import { BarberModel } from './infrastructure/persistence/typeorm/models/barber.model';
import { BarberModule } from './infrastructure/modules/barber.module';
import { BarbershopModel } from './infrastructure/persistence/typeorm/models/barbershop.model';
import { ServiceModel } from './infrastructure/persistence/typeorm/models/service.model';
import { AppointmentModel } from './infrastructure/persistence/typeorm/models/appointment.model';
import { CustomerModel } from './infrastructure/persistence/typeorm/models/customer.model';
import { OperatingHoursModel } from './infrastructure/persistence/typeorm/models/operating-hours.model';
import { BarbershopModule } from './infrastructure/modules/barbershop.module';
import { CustomerModule } from './infrastructure/modules/customer.module';
import { ServiceModule } from './infrastructure/modules/service.module';
import { AppointmentModule } from './infrastructure/modules/appointment.module';
/*
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'db_navalha',
    entities: [UserModel, BarberModel, CustomerModel, BarbershopModel, ServiceModel, AppointmentModel, OperatingHoursModel],
    synchronize: true
  }),
    UserModule, BarberModule, BarbershopModule, CustomerModule, ServiceModule, AppointmentModule]
})
    */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:', // usa banco em memória
      entities: [
        UserModel,
        BarberModel,
        CustomerModel,
        BarbershopModel,
        ServiceModel,
        AppointmentModel,
        OperatingHoursModel,
      ],
      synchronize: true, // recria o schema a cada execução
    }),
    UserModule,
    BarberModule,
    BarbershopModule,
    CustomerModule,
    ServiceModule,
    AppointmentModule,
  ],
})
export class AppModule { }
