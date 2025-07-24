import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateBarbershopDto } from "../dtos/barbershop/create-barbershop.dto";
import { BarbershopResponseDto } from "../dtos/barbershop/barbershop-response.dto";
import { BarbershopMapper } from "src/infrastructure/persistence/mappers/barbershop.mapper";
import { CreateBarbershopService } from "src/application/services/barbershop/create-barbershop.service";
import { FindBarbershopService } from "src/application/services/barbershop/find-barbershop.service";
import { FindAllBarbershopsService } from "src/application/services/barbershop/find-all-barbershops.service";
import { DeleteBarbershopService } from "src/application/services/barbershop/delete-barbershop.service";

@Controller('barbershop')
export class BarbershopController {

    constructor(private readonly createBarbershop: CreateBarbershopService,
        private readonly findBarbershop: FindBarbershopService,
        private readonly findAllBarbershops: FindAllBarbershopsService,
        private readonly deleteBarbershop: DeleteBarbershopService
    ) { }

    @Post()
    async create(@Body() dto: CreateBarbershopDto): Promise<BarbershopResponseDto> {
        const barbershop = BarbershopMapper.fromDTO(dto);
        const savedBarbershop = await this.createBarbershop.execute(barbershop);
        return BarbershopMapper.toDTO(savedBarbershop);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<BarbershopResponseDto> {
        const barbershop = await this.findBarbershop.execute(id);
        return BarbershopMapper.toDTO(barbershop);
    }

    @Get()
    async findAll(): Promise<BarbershopResponseDto[]> {
        const barbershops = await this.findAllBarbershops.execute();
        return barbershops.map(BarbershopMapper.toDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deleteBarbershop.execute(id);
    }
}
