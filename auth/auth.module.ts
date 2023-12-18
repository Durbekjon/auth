import { PrismaService } from '../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AtStratergy } from './strategies/at.strategy';
import { AuthController } from './auth.controller';
import { RtStrategy } from './strategies/rt.strategy';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AtStratergy, RtStrategy, PrismaService, JwtService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'durbeksaydaliyev798@gmail.com',
          pass: 'kfutdgkarudeupsa',
        },
      },
    }),
    JwtModule.register({}),
  ],
})
export class AuthModule {}
