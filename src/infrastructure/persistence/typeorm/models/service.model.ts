import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BarbershopModel } from "./barbershop.model";
import { BarberModel } from "./barber.model";

@Entity({ name: 'services' })
export class ServiceModel {
    @PrimaryGeneratedColumn('uuid')
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

    @ManyToOne(() => BarbershopModel, (barbershop) => barbershop.services)
    @JoinColumn({ name: 'barbershopId' })
    barbershop: BarbershopModel;

    @ManyToMany(() => BarberModel, (barber) => barber.availableServices)
    barbers: BarberModel[];
}