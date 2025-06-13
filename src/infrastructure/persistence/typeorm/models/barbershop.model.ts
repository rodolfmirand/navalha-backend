import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { UserModel } from "./user.model";
import { BarberModel } from "./barber.model";
import { ServiceModel } from "./service.model";
import { OperatingHoursModel } from "./operating-hours.model";
import { AppointmentModel } from "./appointment.model";

@Entity({ name: 'barbershops' })
export class BarbershopModel {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({type: 'text', nullable: true})
    description?: string;

    @Column({nullable: true})
    logoUrl?: string;

    @Column({type: 'jsonb'})
    address: {
        street: string;
        city: string;
        disctric: string;
        number: string;
        state: string;
    };

    @Column()
    contactPhone: string;

    @Column({unique: true})
    contactEmail: string;

    @Column('uuid')
    ownerId: string;

    @OneToOne(() => UserModel)
    owner: UserModel;

    @OneToMany(()=> BarberModel, (barber) => barber.barbershop)
    barbers: BarberModel[];

    @OneToMany(() => ServiceModel, (service) => service.barbershop)
    services: ServiceModel[];

    @OneToMany(() => OperatingHoursModel, (hours) => hours.barbershop)
    operatingHours: OperatingHoursModel[];

    @OneToMany(() => AppointmentModel, (appointment) => appointment.barbershop)
    appointments: AppointmentModel[];
}