import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  constructor(private readonly mailer: MailerService) {}
  async send() {
    const send = this.mailer.sendMail({
      to: 'durbeksaydaliyev798@gmail.com',
      from: 'saydaliyevdurbek0512@gmail.com',
      subject: 'test nestjs mailer',
      text: 'welcome',
      html: '<b>Testing message</b>',
    });
    if (!send) return 'error';
  }
}
