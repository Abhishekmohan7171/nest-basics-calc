import { Controller, Get, Header,Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@Header('Content-Type','text/html')
  getHello():string {
    return 'hello';
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
