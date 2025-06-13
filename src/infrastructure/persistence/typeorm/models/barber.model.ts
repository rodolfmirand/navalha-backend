import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { UserModel } from "./user.model";
import { Barbershop } from "src/domain/entities/barbershop.entity";
import { BarbershopModel } from "./barbershop.model";
import { ServiceModel } from "./service.model";
import { AppointmentModel } from "./appointment.model";

@Entity({ name: 'barbers' })
export class BarberModel {
    @PrimaryColumn('uuid')
    id: string;

    @Column('uuid')
    userId: string;

    @OneToOne(() => UserModel)
    @JoinColumn({ name: 'userId' })
    user: UserModel;

    @Column('uuid')
    barbershopId: string;

    @ManyToOne(() => BarbershopModel, (barbershop) => barbershop.barbers)
    barbershop: BarbershopModel;

    @Column({ type: 'simple-array', nullable: true })
    specialties: string[];

    @Column({ type: 'text', nullable: true})
    bio?: string;

    @ManyToMany(() => ServiceModel)
    @JoinTable({
        name: 'barbers_services',
        joinColumn: { name: 'barberId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'serviceId', referencedColumnName: 'id' }
    })
    availableServices: ServiceModel[];

    @OneToMany(() => AppointmentModel, (appointment) => appointment.barber)
    appointments: AppointmentModel[];
}