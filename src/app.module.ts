import { Module } from '@nestjs/common';
import { FixerModule } from './fixer/fixer.module';

@Module({
  imports: [FixerModule],
})
export class AppModule {}
