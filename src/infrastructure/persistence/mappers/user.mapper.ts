import { User } from 'src/domain/entities/user.entity';
import { UserModel } from '../typeorm/models/user.model';
export class UserMapper {
    public static toDomain(model: UserModel): User {
        const entity = new User();

        entity.id = model.id;
        entity.name = model.name;
        entity.email = model.email;
        entity.passwordHash = model.passwordHash;
        entity.phoneNumber = model.phoneNumber;
        entity.role = model.role;

        return entity;
    }

    public static toPersistence(entity: User): UserModel {
        const model = new UserModel();

        model.id = entity.id;
        model.name = entity.name;
        model.email = entity.email;
        model.passwordHash = entity.passwordHash;
        model.phoneNumber = entity.phoneNumber;
        model.role = entity.role;

        return model;
    }
}