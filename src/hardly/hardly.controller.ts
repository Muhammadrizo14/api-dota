import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HardlyService } from './hardly.service';
import { CreateHardlyDto } from './dto/create-hardly.dto';
import { UpdateHardlyDto } from './dto/update-hardly.dto';

@Controller('hardly')
export class HardlyController {
  constructor(private readonly hardlyService: HardlyService) {}

  @Post()
  create(@Body() createHardlyDto: CreateHardlyDto) {
    return this.hardlyService.create(createHardlyDto);
  }

  @Get()
  findAll() {
    return this.hardlyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hardlyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHardlyDto: UpdateHardlyDto) {
    return this.hardlyService.update(+id, updateHardlyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hardlyService.remove(+id);
  }
}
