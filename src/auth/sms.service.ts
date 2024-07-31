export class SmsService {
  async smsSend(receiver: string, smsAuthNum: string) {
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
      text: `[당근마켓] 인증번호 [${smsAuthNum}] 절대 타인에게는 알려주지 마세요!!`,
      from: sendPhone,
    });
  }
}
