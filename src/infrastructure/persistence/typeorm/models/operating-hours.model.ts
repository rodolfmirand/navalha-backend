import { DayOfWeek } from "src/domain/enums/day-of-week";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'operating_hours'})
export class OperatingHoursModel {
    @PrimaryColumn('uuid')
    id: string;

    @Column('uuid')
    barbershopId: string;

    @Column({type: 'enum', enum: DayOfWeek})
    dayOfWeek: DayOfWeek;
}