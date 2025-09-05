import { Controller, HttpCode, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserMapper } from "src/infrastructure/persistence/mappers/user.mapper";

@Controller('auth')
export class AuthController {

    @HttpCode(200)
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return UserMapper.toDTO(req.user);
    }
}