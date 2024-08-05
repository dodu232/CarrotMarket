import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/auth/dto/login.dto';
import { VerifyCodeDto } from 'src/auth/dto/verityCode.dto';
import { PhoneVerifyRepository } from 'src/auth/repository/phoneVerity.repository';

@Injectable()
export class AuthService {
  constructor(private readonly phoneVerifyRepository: PhoneVerifyRepository) {}

  generateCode(): string {
    return Math.floor(Math.random() * 900000 + 100000).toString();
  }

  async sendCode(receiver: string, code: string) {
    // 메시지 SDK 불러오기
    const msgModule = require('coolsms-node-sdk').default;

    // 키 관리
    const apiKey = 'NCS50T4FH4SPOQUG';
    const apiSecret = '733Y7HIZUGUC9K8P8T1TVTFOONYGXKAY';
    const messageService = new msgModule(apiKey, apiSecret);

    const sendPhone = '01094677025';
    // 메시지 구성
    messageService.sendOne({
      to: receiver,
      text: `[당근마켓] 인증번호 [${code}] 절대 타인에게는 알려주지 마세요!!`,
      from: sendPhone,
    });
  }

  async createVerifyCode(dto: LoginDto) {
    const code = this.generateCode();
    this.sendCode(dto.phone, code);
    return this.phoneVerifyRepository.createVerifyCode(dto, code);
  }

  async verifyCode(dto: VerifyCodeDto){
    const phoneVerify = await this.phoneVerifyRepository.findVerifyCode(dto);

    if(dto.code === phoneVerify.code){
      const now = new Date();
      const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

      if(phoneVerify.regDate < fiveMinutesAgo){
          return true;
      }
      else {
          return false;
      }

    } else {
        return this.phoneVerifyRepository.deleteVerifyCode(dto);
    }

  }
}
