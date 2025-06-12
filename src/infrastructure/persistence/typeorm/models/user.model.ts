import { UserRole } from "src/domain/enums/user-role.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserModel {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    passwordHash: string;

    @Column({type: 'varchar', length: 20, nullable: true})
    phoneNumber: string;

    @Column({type: 'enum', enum: UserRole, default: UserRole.CLIENT})
    role: UserRole;
}