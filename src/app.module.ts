import { Module } from '@nestjs/common';
import { HardlyModule } from './hardly/hardly.module';
import { RolesModule } from './roles/roles.module';
import { TypeOfAttackModule } from './type-of-attack/type-of-attack.module';
import { AttributeModule } from './attribute/attribute.module';
import { HeroModule } from './hero/hero.module';
import PrismaModule from "./prisma/prisma.module";

@Module({
  imports: [PrismaModule, HardlyModule, RolesModule, TypeOfAttackModule, AttributeModule, HeroModule],
})
export default class AppModule {}
