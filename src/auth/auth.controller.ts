import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types/tokens.type';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.login(dto);
  }
  @Post('register')
  async register(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.register(dto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  async logout(@Req() req: Request) {
    const user = req.user;
    console.log(user);

    return this.authService.logout(user['sub']);
  }
  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  async refresh(@Req() req: Request) {
    // const user = req.user;
    // console.log(user['sub'], user['refresh_token']);
    // Uncomment and implement the logic for token refresh
    // return this.authService.refresh(user.sub, user.refresh_token);
  }
}
