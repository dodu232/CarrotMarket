import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/auth/login.dto';
import { SmsService } from 'src/auth/sms.service';

@Injectable()
export class AuthService {
  constructor(private readonly smsService: SmsService) {}

  private codes = new Map<string, string>();

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

  async login(dto: LoginDto) {
    const code = this.generateCode();
    this.codes.set(dto.phone, code);

    // return await this.smsService.smsSend(dto.phone, code);
    return code;
  }

  verifyCode(phone: string, code: string): boolean {
    const storedCode = this.codes.get(phone);
    if (storedCode === code) {
      this.codes.delete(phone);
      return true;
    }
    return false;
  }
}
