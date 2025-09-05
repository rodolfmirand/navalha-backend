import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserModel } from "./user.model";
import { BarbershopModel } from "./barbershop.model";
import { ServiceModel } from "./service.model";
import { AppointmentModel } from "./appointment.model";

@Entity({ name: 'barbers' })
export class BarberModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    userId: string;

    @OneToOne(() => UserModel, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: UserModel;

    @Column('uuid')
    barbershopId: string;

    @ManyToOne(() => BarbershopModel, (barbershop) => barbershop.barbers)
    @JoinColumn({ name: 'barbershopId' })
    barbershop: BarbershopModel;

    @Column({ type: 'simple-array', nullable: true })
    specialties: string[];

    @Column({ type: 'text', nullable: true })
    bio?: string;

    @ManyToMany(() => ServiceModel, (service) => service.barbers)
    @JoinTable({
        name: 'barbers_services',
        joinColumn: { name: 'barberId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'serviceId', referencedColumnName: 'id' }
    })
    availableServices: ServiceModel[];

    @OneToMany(() => AppointmentModel, (appointment) => appointment.barber)
    appointments: AppointmentModel[];
}