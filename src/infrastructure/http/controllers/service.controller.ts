import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateServiceService } from "src/application/services/service/create-service.service";
import { DeleteServiceService } from "src/application/services/service/delete-service.service";
import { FindAllServicesService } from "src/application/services/service/find-all-services.service";
import { FindServiceService } from "src/application/services/service/find-service.service";
import { CreateServiceDto } from "../dtos/service/create-service.dto";
import { ServiceResponseDto } from "../dtos/service/service-response.dto";
import { ServiceMapper } from "src/infrastructure/persistence/mappers/service.mapper";
import { AddServiceToBarberDto } from "../dtos/service/add-service-to-barber.dto";
import { AddServiceToBarberService } from "src/application/services/service/add-service-to-barber.service";

@Controller('service')
export class ServiceController {

    constructor(private readonly createService: CreateServiceService,
        private readonly findService: FindServiceService,
        private readonly findAllServices: FindAllServicesService,
        private readonly deleteService: DeleteServiceService,
        private readonly addServiceToBarber: AddServiceToBarberService
    ) { }

    @Post()
    async create(@Body() dto: CreateServiceDto): Promise<ServiceResponseDto> {
        const service = ServiceMapper.fromDTO(dto);
        const savedService = await this.createService.execute(service);
        return ServiceMapper.toDTO(savedService);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<ServiceResponseDto> {
        const service = await this.findService.execute(id);
        return ServiceMapper.toDTO(service);
    }

    @Get()
    async findAll(): Promise<ServiceResponseDto[]> {
        const services = await this.findAllServices.execute();
        return services.map(ServiceMapper.toDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deleteService.execute(id);
    }

    @Put()
    async addService(@Body() dto: AddServiceToBarberDto): Promise<void> {
        await this.addServiceToBarber.execute(dto.servicesId, dto.barberId);
    }
}