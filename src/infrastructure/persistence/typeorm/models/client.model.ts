import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { UserModel } from "./user.model";
import { AppointmentModel } from "./appointment.model";

@Entity({ name: 'clients' })
export class ClientModel {
    @PrimaryColumn('uuid')
    id: string;

    @Column('uuid')
    userId: string;

    @OneToOne(() => UserModel)
    @JoinColumn({ name: 'userId' })
    user: UserModel;

    @Column({ type: 'jsonb', nullable: true })
    preferences?: {
        booking?: {
            preferredBarberId?: string;
            preferredServicesIds?: string[];
            sendReminder: boolean;
        };
        service?: {
            chatLevel: 'QUIET' | 'NORMAL' | 'CHATTY';
            allergiesOrSensitivities?: string;
            generalNotes?: string;
        };
    };

    @OneToMany(() => AppointmentModel, (appointment) => appointment.clientId)
    appointments: AppointmentModel[];
}