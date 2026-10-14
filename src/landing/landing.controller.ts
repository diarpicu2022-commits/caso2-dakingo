import { Controller, Get, Inject, Render } from '@nestjs/common';
import { LandingService } from './landing.service';

@Controller()
export class LandingController {
  constructor(@Inject(LandingService) private readonly landing: LandingService) {}

  @Get()
  @Render('index')
  home() {
    return this.landing.getPage();
  }
}
