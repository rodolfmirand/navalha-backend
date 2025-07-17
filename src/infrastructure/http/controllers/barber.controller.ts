import { Body, Controller, Post } from "@nestjs/common";
import { CreateBarberService } from "src/application/services/barber/create-barber.service";
import { DeleteBarberService } from "src/application/services/barber/delete-barber.service";
import { FindAllBarbersService } from "src/application/services/barber/find-all-barbers.service";
import { FindBarberService } from "src/application/services/barber/find-barber.service";
import { CreateBarberDto } from "../dtos/barber/create-barber.dto";
import { BarberResponseDto } from "../dtos/barber/barber-response.dto";
import { BarberMapper } from "src/infrastructure/persistence/mappers/barber.mapper";

@Controller()
export class BarberController {

    constructor(private readonly createBarber: CreateBarberService,
        private readonly findBarber: FindBarberService,
        private readonly findAllBarbers: FindAllBarbersService,
        private readonly deleteBarber: DeleteBarberService
    ) { }

    @Post()
    async create(@Body() dto: CreateBarberDto): Promise<BarberResponseDto> {
        const barber = BarberMapper.fromDTO(dto);
    }
}