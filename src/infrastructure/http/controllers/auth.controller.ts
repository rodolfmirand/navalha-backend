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
        const token = this.AuthService.login(req.user.id)
        return {
            id: req.user.id,
            token
        }
    }
}