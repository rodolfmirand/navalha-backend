import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateBarberService } from "src/application/services/barber/create-barber.service";
import { DeleteBarberService } from "src/application/services/barber/delete-barber.service";
import { FindAllBarbersService } from "src/application/services/barber/find-all-barbers.service";
import { FindBarberService } from "src/application/services/barber/find-barber.service";
import { CreateBarberDto } from "../dtos/barber/create-barber.dto";
import { BarberResponseDto } from "../dtos/barber/barber-response.dto";
import { BarberMapper } from "src/infrastructure/persistence/mappers/barber.mapper";
import { UpdateBarberDto } from "../dtos/barber/update-barber.dto";
import { UpdateBarberService } from "src/application/services/barber/update-barber.service";

@Controller('barber')
export class BarberController {

    constructor(private readonly createBarber: CreateBarberService,
        private readonly findBarber: FindBarberService,
        private readonly findAllBarbers: FindAllBarbersService,
        private readonly deleteBarber: DeleteBarberService,
        private readonly updateBarber: UpdateBarberService
    ) { }

    @Post()
    async create(@Body() dto: CreateBarberDto): Promise<BarberResponseDto> {
        const barber = BarberMapper.fromCreateDTO(dto);
        const createdBarber = await this.createBarber.execute(barber);
        return BarberMapper.toDTO(createdBarber);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<BarberResponseDto> {
        const barber = await this.findBarber.execute(id);
        return BarberMapper.toDTO(barber);
    }

    @Get()
    async findAll(): Promise<BarberResponseDto[]> {
        const barbers = await this.findAllBarbers.execute();
        return barbers.map(BarberMapper.toDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deleteBarber.execute(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateBarberDto): Promise<BarberResponseDto> {
        const barber = BarberMapper.fromUpdateDTO(dto);
        const updatedBarber = await this.updateBarber.execute(id, barber);
        return BarberMapper.toDTO(updatedBarber);
    }
}