import { User } from 'src/domain/entities/user.entity';
import { UserModel } from '../typeorm/models/user.model';
export class UserMapper {
    public static toDomain(userModel: UserModel): User {
        return new User(userModel.id, userModel.name, userModel.email, userModel.passwordHash, userModel.phoneNumber, userModel.role);
    }

    public static toPersistence(user: User): UserModel {
        const userModel = new UserModel();
        userModel.id = user.id;
        userModel.name = user.name;
        userModel.email = user.email;
        userModel.passwordHash = user.passwordHash;
        userModel.phoneNumber = user.phoneNumber;
        userModel.role = user.role;
        return userModel;
    }
}