import { DayOfWeek } from "src/domain/enums/day-of-week";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { BarbershopModel } from "./barbershop.model";

@Entity({name: 'operating_hours'})
export class OperatingHoursModel {
    @PrimaryColumn('uuid')
    id: string;

    // alterar para enum quando for trocar para postgresql
    @Column({type: 'text', enum: DayOfWeek})
    dayOfWeek: DayOfWeek;

    @Column({ type: 'time' })
    openingTime: string;

    @Column({ type: 'time' })
    closingTime: string;

    @Column('uuid')
    barbershopId: string;

    @ManyToOne(() => BarbershopModel, (barbershop) => barbershop.operatingHours)
    @JoinColumn({ name: 'barbershopId' })
    barbershop: BarbershopModel;
}