import { Appointment } from "src/domain/entities/appointment.entity";
import { AppointmentModel } from "../typeorm/models/appointment.model";

export class AppointmentMapper {
    public static toDomain(appointmentModel: AppointmentModel): Appointment {
        const appointmentEntity = new Appointment();

        appointmentEntity.id = appointmentModel.id;
        appointmentEntity.clientId = appointmentModel.clientId;
        appointmentEntity.barberId = appointmentModel.barberId;
        appointmentEntity.barbershopId = appointmentModel.barbershopId;
        appointmentEntity.serviceId = appointmentModel.serviceId;
        appointmentEntity.status = appointmentModel.status;
        appointmentEntity.startTime = appointmentModel.startTime;
        appointmentEntity.priceInCents = appointmentModel.priceInCents;

        return appointmentEntity;
    }

    public static toPersistence(appointmentEntity: Appointment): AppointmentModel {
        const appointmentModel = new AppointmentModel();

        appointmentModel.id = appointmentEntity.id;
        appointmentModel.clientId = appointmentEntity.clientId;
        appointmentModel.barberId = appointmentEntity.barberId;
        appointmentModel.barbershopId = appointmentEntity.barbershopId;
        appointmentModel.serviceId = appointmentEntity.serviceId;
        appointmentModel.status = appointmentEntity.status;
        appointmentModel.startTime = appointmentEntity.startTime;
        appointmentModel.priceInCents = appointmentEntity.priceInCents;

        return appointmentModel;
    }
}