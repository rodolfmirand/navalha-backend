import { UserRole } from "src/domain/enums/user-role.enum";

export class UserResponseDTO {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly username: string;
    readonly phoneNumber: string;
    readonly role: UserRole;
}