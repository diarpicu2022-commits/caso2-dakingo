import { Module } from '@nestjs/common';
import { LandingController } from './landing/landing.controller';
import { LandingService } from './landing/landing.service';

@Module({
  controllers: [LandingController],
  providers: [LandingService],
})
export class AppModule {}
