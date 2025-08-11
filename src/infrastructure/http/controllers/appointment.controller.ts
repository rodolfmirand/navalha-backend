import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAppointmentService } from "src/application/services/appointment/create-appointment.service";
import { FindAppointmentService } from '../../../application/services/appointment/find-appointment.service';
import { FindAllAppointmentsService } from "src/application/services/appointment/find-all-appointments.service";
import { DeleteAppointmentService } from 'src/application/services/appointment/delete-appointment.service';
import { CreateAppointmentDto } from '../dtos/appointment/create-appointment.dto';
import { AppointmentResponseDto } from '../dtos/appointment/appointment-response.dto';
import { AppointmentMapper } from 'src/infrastructure/persistence/mappers/appointment.mapper';
import { UpdateAppointmentService } from 'src/application/services/appointment/update-appointment.service';
import { UpdateAppointmentDto } from '../dtos/appointment/update-appointment.dto';

@Controller('appointment')
export class AppointmentController {

    constructor(private readonly createAppointment: CreateAppointmentService,
        private readonly findAppointment: FindAppointmentService,
        private readonly findAllAppointment: FindAllAppointmentsService,
        private readonly deleteAppointment: DeleteAppointmentService,
        private readonly updateAppointment: UpdateAppointmentService
    ) { }

    @Post()
    async create(@Body() dto: CreateAppointmentDto): Promise<AppointmentResponseDto> {
        const appointment = AppointmentMapper.fromDTO(dto);
        const savedAppointment = await this.createAppointment.execute(appointment);
        return AppointmentMapper.toDTO(savedAppointment);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<AppointmentResponseDto> {
        const appointment = await this.findAppointment.execute(id);
        return AppointmentMapper.toDTO(appointment);
    }

    @Get()
    async findAll(): Promise<AppointmentResponseDto[]> {
        const appointments = await this.findAllAppointment.execute();
        return appointments.map(AppointmentMapper.toDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deleteAppointment.execute(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateAppointmentDto): Promise<void> {
        await this.updateAppointment.execute(id, dto.status);
    }
}