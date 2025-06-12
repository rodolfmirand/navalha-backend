import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { UserModel } from "./user.model";
import { Barbershop } from "src/domain/entities/barbershop.entity";

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

    /** 
     * TODO
     * barbershop, services and appointments relationships
     */
}