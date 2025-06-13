import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { BarbershopModel } from "./barbershop.model";
import { BarberModel } from "./barber.model";

@Entity({ name: 'services' })
export class ServiceModel {
    @PrimaryColumn('uuid')
    id: string;

    @Column('uuid')
    barbershopId: string;

    @Column()
    name: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ type: 'integer' })
    priceInCents: number;

    @Column()
    durationInMinutes: number;

    @Column({ default: true, type: 'boolean' })
    isActive: boolean;

    @ManyToOne(() => BarbershopModel)
    @JoinColumn({ name: 'barbershopId' })
    barbershop: BarbershopModel;

    @ManyToMany(() => BarberModel, (barber) => barber.appointments)
    barbers: BarberModel[];
}