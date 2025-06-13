import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: 'services'})
export class ServiceModel {
    @PrimaryColumn('uuid')
    id: string;

    @Column('uuid')
    barbershopId: string;

    @Column()
    name: string;

    @Column({ type: 'text',nullable: true})
    description?: string;

    @Column({type: 'integer'})
    priceInCents: number;

    @Column()
    durationInMinutes: number;

    @Column({ default: true, type: 'boolean'})
    isActive: boolean;

    @ManyToOne(()=> Barber)
}