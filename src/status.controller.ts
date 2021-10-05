import { Controller, Get } from '@nestjs/common';

@Controller('')
export class StatusController {
  @Get()
  getStatus() {
    return `Nothing to see here, keep moving`;
  }
}
