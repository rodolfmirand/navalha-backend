import { UserRole } from "../enums/user-role.enum";

export class User {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    phoneNumber: string;
    role: UserRole;
    hashedRefreshToken: string;
}