import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfAttackDto } from './create-type-of-attack.dto';

export class UpdateTypeOfAttackDto extends PartialType(CreateTypeOfAttackDto) {}
