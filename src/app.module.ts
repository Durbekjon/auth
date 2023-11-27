import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
// import { APP_GUARD } from '@nestjs/core';
// import { AtGuard } from './common/guards/at.guard';
import { AppService } from './app.service';
import { appController } from './app.controller';
import { EmailModule } from './email/email.module';

@Module({
  imports: [PrismaModule, AuthModule, EmailModule],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AtGuard,
    // },
    AppService,
  ],
  controllers: [appController],
})
export class AppModule {}
