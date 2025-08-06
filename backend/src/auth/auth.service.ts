import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    googleLogin(user: any) {
        if (!user) {
            return { message: 'No user from Google' };
        }
        const payload = { email: user.email, sub: user.email };
        return {
            message: 'User info from Google',
            user,
            access_token: this.jwtService.sign(payload),
        };
    }
}