import { Controller, HttpCode, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from '../../../application/services/auth/auth.service';
import { LocalAuthGuard } from "src/application/services/auth/guards/local-auth.guard";

@Controller('auth')
export class AuthController {

    constructor(private readonly AuthService: AuthService) { }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.AuthService.login(req.user.id);
    }

    @Post('refresh')
    @UseGuards(AuthGuard('refresh-jwt'))
    async refresh(@Request() req) {
        return this.AuthService.refreshToken(req.user.id);
    }
}