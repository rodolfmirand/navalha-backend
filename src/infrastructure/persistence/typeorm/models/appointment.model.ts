import { AppointmentStatus } from "src/domain/enums/appointment-status.enum";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ClientModel } from "./client.model";
import { BarberModel } from "./barber.model";
import { BarbershopModel } from "./barbershop.model";
import { ServiceModel } from "./service.model";

@Entity({ name: 'appointments' })
export class AppointmentModel {
    @PrimaryColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: AppointmentStatus, default: AppointmentStatus.SCHEDULED })
    status = AppointmentStatus;

    @Column({ type: 'time with time zone' })
    startTime: Date;

    @Column({ type: 'integer' })
    priceInCents: number;

    @Column('uuid')
    clientId: string;

    @ManyToOne(() => ClientModel, (client) => client.appointments)
    @JoinColumn({ name: 'clientId' })
    client: ClientModel;

    @Column('uuid')
    barberId: string;

    @ManyToOne(() => BarberModel, (barber) => barber.appointments)
    @JoinColumn({ name: 'barberId' })
    barber: BarberModel;

    @Column('uuid')
    barbershopId: string;

    @ManyToOne(() => BarbershopModel, (barbershop) => barbershop.appointments)
    @JoinColumn({ name: 'barbershopId' })
    barbershop: BarberModel;

    @Column('uuid')
    serviceId: string;

    @ManyToOne(() => ServiceModel)
    @JoinColumn({ name: 'serviceId' })
    service: ServiceModel;
}