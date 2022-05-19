import { Module } from '@nestjs/common';
import { TypeOfAttackService } from './type-of-attack.service';
import { TypeOfAttackController } from './type-of-attack.controller';

@Module({
  controllers: [TypeOfAttackController],
  providers: [TypeOfAttackService]
})
export class TypeOfAttackModule {}
