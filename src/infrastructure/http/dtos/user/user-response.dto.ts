import { UserRole } from "src/domain/enums/user-role.enum";

export class UserResponseDTO {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    role: UserRole;
}