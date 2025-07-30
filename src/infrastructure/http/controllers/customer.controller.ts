import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCustomerService } from "src/application/services/customer/create-customer.service";
import { DeleteCustomerService } from "src/application/services/customer/delete-customer.service";
import { FindAllCUstomersService } from "src/application/services/customer/find-all-customers.service";
import { FindCustomerService } from "src/application/services/customer/find-customer.service";
import { CreateCustomerDto } from "../dtos/customer/create-customer.dto";
import { CustomerResponseDto } from "../dtos/customer/customer-response.dto";
import { CustomerMapper } from "src/infrastructure/persistence/mappers/customer.mapper";
import { UpdateCustomerDto } from "../dtos/customer/update-customer.dto";
import { UpdateCustomerService } from "src/application/services/customer/update-customer.service";

@Controller('customer')
export class CustomerController {

    constructor(private readonly createCustomer: CreateCustomerService,
        private readonly findCustomer: FindCustomerService,
        private readonly findAllCustomers: FindAllCUstomersService,
        private readonly deleteCustomer: DeleteCustomerService,
        private readonly updateCustomer: UpdateCustomerService
    ) { }

    @Post()
    async create(@Body() dto: CreateCustomerDto): Promise<CustomerResponseDto> {
        const customer = CustomerMapper.fromCreateDTO(dto);
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

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateCustomerDto): Promise<CustomerResponseDto> {
        const customer = CustomerMapper.fromUpdateDTO(dto);
        const updatedCustomer = await this.updateCustomer.execute(id, customer);
        return CustomerMapper.toDTO(updatedCustomer);
    }
}