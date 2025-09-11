import { Controller, HttpCode, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from '../../../application/services/auth/auth.service';
import { LocalAuthGuard } from "src/application/services/auth/guards/local-auth.guard";
import { JwtAuthGuard } from "src/application/services/auth/guards/jwt-auth.guard";
import { RefreshAuthGuard } from "src/application/services/auth/guards/refresh-auth.guard";

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
    @UseGuards(RefreshAuthGuard)
    async refresh(@Request() req) {
        return this.AuthService.refreshToken(req.user.id);
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    async logout(@Request() req) {
        return this.AuthService.signOut(req.user.id);
    }
}