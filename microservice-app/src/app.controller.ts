import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @EventPattern('message_printed') async handleMessagePrinted(
    data: Record<string, unknown>,
  ) {
    console.log(`Event registered : ${data.text}`);
  }

  @EventPattern('logged_in') async handleLoggedIn(
    data: Record<string, unknown>,
  ) {
    console.log(`Event registered : ${data.text}`);
  }
}
