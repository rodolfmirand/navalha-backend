import { UserRole } from "src/domain/enums/user-role.enum";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    passwordHash: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    phoneNumber: string;

    // alterar para enum quando for trocar para postgresql
    @Column({ type: 'text', enum: UserRole, default: UserRole.CUSTOMER })
    role: UserRole;
}