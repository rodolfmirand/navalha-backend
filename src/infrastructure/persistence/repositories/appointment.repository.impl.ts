import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Appointment } from "src/domain/entities/appointment.entity";
import { IAppointmentRepository } from "src/domain/repositories/iappointment.repository";
import { AppointmentModel } from "../typeorm/models/appointment.model";
import { Repository } from "typeorm";
import { AppointmentMapper } from "../mappers/appointment.mapper";

@Injectable()
export class AppointmentRepositoryImpl implements IAppointmentRepository {

    constructor(@InjectRepository(AppointmentModel) private readonly repository: Repository<AppointmentModel>) { }

    async save(appointment: Appointment): Promise<void> {
        const model = AppointmentMapper.toPersistence(appointment);
        await this.repository.save(model);
    }

    async findById(id: string): Promise<Appointment | null> {
        const entity = await this.repository.findOneBy({ id });
        return entity ? AppointmentMapper.toDomain(entity) : null;
    }

    async findAll(): Promise<Appointment[]> {
        const entities = await this.repository.find();
        return entities.map(AppointmentMapper.toDomain);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}