import { Controller, Get } from '@nestjs/common';
import { FixerService } from './fixer.service';

@Controller('fixer')
export class FixerController {
  constructor(
    private fixerService: FixerService,
  ) {}

  @Get('ID')
  public getID() {
    this.fixerService.GetID();
  }
}
