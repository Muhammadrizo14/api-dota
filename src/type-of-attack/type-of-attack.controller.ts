import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfAttackService } from './type-of-attack.service';
import { CreateTypeOfAttackDto } from './dto/create-type-of-attack.dto';
import { UpdateTypeOfAttackDto } from './dto/update-type-of-attack.dto';

@Controller('type-of-attack')
export class TypeOfAttackController {
  constructor(private readonly typeOfAttackService: TypeOfAttackService) {}

  @Post()
  create(@Body() createTypeOfAttackDto: CreateTypeOfAttackDto) {
    return this.typeOfAttackService.create(createTypeOfAttackDto);
  }

  @Get()
  findAll() {
    return this.typeOfAttackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOfAttackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeOfAttackDto: UpdateTypeOfAttackDto) {
    return this.typeOfAttackService.update(+id, updateTypeOfAttackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeOfAttackService.remove(+id);
  }
}
