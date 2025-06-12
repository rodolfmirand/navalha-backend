import { UserRole } from "../enums/user-role.enum";

export class User {
    id: string;
    email: string;
    passwordHash: string;
    role: UserRole;

    name: string;
    phoneNumber: string;
}