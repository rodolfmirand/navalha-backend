import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import { AuthJwtPayload } from '../types/auth-jwtPayload.type';
import { Inject, Injectable } from '@nestjs/common';
import refreshJwtConfig from 'src/application/config/refresh-jwt.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'refresh-jwt') {
    constructor(@Inject(refreshJwtConfig.KEY) private refreshJwtConfiguration: ConfigType<typeof refreshJwtConfig>) { 
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: refreshJwtConfiguration.secret!,
            ignoreExpiration: false,
        });
    }

    validate(payload: AuthJwtPayload) {
        return { id: payload.sub };
    }
}