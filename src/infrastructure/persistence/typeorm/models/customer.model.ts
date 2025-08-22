import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserModel } from "./user.model";
import { AppointmentModel } from "./appointment.model";

@Entity({ name: 'customers' })
export class CustomerModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    userId: string;

    @OneToOne(() => UserModel)
    @JoinColumn({ name: 'userId' })
    user: UserModel;

    @Column('uuid', { nullable: true })
    preferredBarberId: string;

    @Column('uuid', { array: true, nullable: true })
    preferredServicesId: string[];

    @Column({ default: true })
    sendReminder: boolean;

    @Column({ type: 'enum', enum: ['QUIET', 'NORMAL', 'CHATTY'], default: 'NORMAL' })
    chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';

    @Column({ nullable: true })
    allergiesOrSensitivities: string;

    @Column({ nullable: true })
    generalNotes: string;

    @OneToMany(() => AppointmentModel, (appointment) => appointment.customer)
    appointments: AppointmentModel[];
}