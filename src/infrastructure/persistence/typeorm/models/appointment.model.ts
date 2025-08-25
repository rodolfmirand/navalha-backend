import { AppointmentStatus } from "src/domain/enums/appointment-status.enum";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CustomerModel } from "./customer.model";
import { BarberModel } from "./barber.model";
import { BarbershopModel } from "./barbershop.model";
import { ServiceModel } from "./service.model";

@Entity({ name: 'appointments' })
export class AppointmentModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // alterar para enum quando for trocar para postgresql
    @Column({ type: 'text', enum: AppointmentStatus, default: AppointmentStatus.SCHEDULED })
    status: AppointmentStatus;

    @Column({ type: 'date' })
    startTime: Date;

    @Column({ type: 'integer' })
    priceInCents: number;

    @Column('uuid')
    customerId: string;

    @ManyToOne(() => CustomerModel, (customer) => customer.appointments)
    @JoinColumn({ name: 'clientId' })
    customer: CustomerModel;

    @Column('uuid')
    barberId: string;

    @ManyToOne(() => BarberModel, (barber) => barber.appointments)
    @JoinColumn({ name: 'barberId' })
    barber: BarberModel;

    @Column('uuid')
    barbershopId: string;

    @ManyToOne(() => BarbershopModel, (barbershop) => barbershop.appointments)
    @JoinColumn({ name: 'barbershopId' })
    barbershop: BarbershopModel;

    @Column('uuid')
    serviceId: string;

    @ManyToOne(() => ServiceModel)
    @JoinColumn({ name: 'serviceId' })
    service: ServiceModel;
}