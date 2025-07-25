import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateCustomerService } from "src/application/services/customer/create-customer.service";
import { DeleteCustomerService } from "src/application/services/customer/delete-customer.service";
import { FindAllCUstomersService } from "src/application/services/customer/find-all-customers.service";
import { FindCustomerService } from "src/application/services/customer/find-customer.service";
import { CreateCustomerDto } from "../dtos/customer/create-customer.dto";
import { CustomerResponseDto } from "../dtos/customer/customer-response.dto";
import { CustomerMapper } from "src/infrastructure/persistence/mappers/customer.mapper";

@Controller('customer')
export class CustomerController {

    constructor(private readonly createCustomer: CreateCustomerService,
        private readonly findCustomer: FindCustomerService,
        private readonly findAllCustomers: FindAllCUstomersService,
        private readonly deleteCustomer: DeleteCustomerService
    ) { }

    @Post()
    async create(@Body() dto: CreateCustomerDto): Promise<CustomerResponseDto> {
        const customer = CustomerMapper.fromDTO(dto);
        const savedCustomer = await this.createCustomer.execute(customer);
        return CustomerMapper.toDTO(savedCustomer);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<CustomerResponseDto> {
        const customer = await this.findCustomer.execute(id);
        return CustomerMapper.toDTO(customer);
    }

    @Get()
    async findAll(): Promise<CustomerResponseDto[]> {
        const customers = await this.findAllCustomers.execute();
        return customers.map(CustomerMapper.toDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deleteCustomer.execute(id);
    }
}