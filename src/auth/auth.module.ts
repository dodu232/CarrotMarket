import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SmsService } from 'src/auth/sms.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, SmsService],
})
export class AuthModule {}
