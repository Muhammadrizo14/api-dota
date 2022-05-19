import { Module } from '@nestjs/common';
import { HardlyService } from './hardly.service';
import { HardlyController } from './hardly.controller';

@Module({
  controllers: [HardlyController],
  providers: [HardlyService]
})
export class HardlyModule {}
