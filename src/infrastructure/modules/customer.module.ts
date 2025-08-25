import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "../persistence/typeorm/models/user.model";
import { CustomerModel } from "../persistence/typeorm/models/customer.model";
import { CustomerController } from "../http/controllers/customer.controller";
import { CreateCustomerService } from "src/application/services/customer/create-customer.service";
import { FindCustomerService } from "src/application/services/customer/find-customer.service";
import { FindAllCUstomersService } from "src/application/services/customer/find-all-customers.service";
import { DeleteCustomerService } from "src/application/services/customer/delete-customer.service";
import { UpdateCustomerService } from "src/application/services/customer/update-customer.service";
import { CustomerRepositoryImpl } from "../persistence/repositories/customer.repository.impl";
import { UserRepositoryImpl } from "../persistence/repositories/user.repository.impl";

@Module({
    imports: [TypeOrmModule.forFeature([CustomerModel, UserModel])],
    controllers: [CustomerController],
    providers: [CreateCustomerService, FindCustomerService, FindAllCUstomersService, DeleteCustomerService, UpdateCustomerService, CustomerRepositoryImpl,
        UserRepositoryImpl],
    exports: [CustomerRepositoryImpl]
})
export class CustomerModule { }