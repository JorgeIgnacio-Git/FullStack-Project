import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) { }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req, @Res() res: Response) {
        const data = this.authService.googleLogin(req.user);
        console.log('Google login data:', data);
        // Redirige al frontend con el token como query param
        res.redirect(
            `http://localhost:3000/login/callback?token=${data.access_token}&email=${encodeURIComponent(data.user.email)}&name=${encodeURIComponent(data.user.firstName)}&picture=${encodeURIComponent(data.user.picture)}`
        );
    }
}