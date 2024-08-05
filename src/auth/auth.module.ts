import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { PhoneVerifyRepository } from 'src/auth/repository/phoneVerity.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PhoneVerifyRepository],
})
export class AuthModule {}
