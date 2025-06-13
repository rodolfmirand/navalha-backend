import { UserRole } from "../enums/user-role.enum";

export class User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber: string;
    role: UserRole;

    constructor(id: string, name: string, email: string, passwordHash: string, phoneNumber: string, role: UserRole,) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
}