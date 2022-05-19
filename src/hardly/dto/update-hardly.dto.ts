import { PartialType } from '@nestjs/mapped-types';
import { CreateHardlyDto } from './create-hardly.dto';

export class UpdateHardlyDto extends PartialType(CreateHardlyDto) {}
