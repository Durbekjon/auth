import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class appController {
  constructor(private readonly appService: AppService) {}
}
