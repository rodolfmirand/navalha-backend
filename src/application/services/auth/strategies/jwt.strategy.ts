import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from 'src/application/config/jwt.config';
import { AuthJwtPayload } from '../types/auth-jwtPayload.type';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(@Inject(jwtConfig.KEY) private jwtConfiguration: ConfigType<typeof jwtConfig>) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConfiguration.secret!,
            ignoreExpiration: false,
        });
    }

    validate(payload: AuthJwtPayload) {
        return { id: payload.sub };
    }
}

