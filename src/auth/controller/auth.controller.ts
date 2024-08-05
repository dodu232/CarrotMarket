import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/service/auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('loginAuth')
  async verifyCode(@Body('phone') phone: string, @Body('code') code: string) {
    return this.authService.verifyCode(phone, code);
  }
}
