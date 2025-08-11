import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './infrastructure/persistence/typeorm/models/user.model';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'db_navalha',
    entities: [UserModel],
    synchronize: true
  }),
    UserModule]
})
export class AppModule { }
