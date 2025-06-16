import { UserRole } from "../enums/user-role.enum";

export class User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber: string;
    role: UserRole;
}