import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { User } from "src/domain/entities/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'login', passwordField: 'password'
        });
    }

    validate(login: string, password: string): Promise<User | null> {
        return this.authService.validateUser(login, password);
    }
}