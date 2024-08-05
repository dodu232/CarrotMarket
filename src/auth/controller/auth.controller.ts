import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/auth/dto/login.dto';
import { VerifyCodeDto } from 'src/auth/dto/verityCode.dto';
import { AuthService } from 'src/auth/service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService
    
  ) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.createVerifyCode(dto);
  }

  @Post('loginVerify')
  async verifyCode(@Body() dto: VerifyCodeDto) {
    return this.authService.verifyCode(dto);
  }
}
