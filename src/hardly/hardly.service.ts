import { Injectable } from '@nestjs/common';
import { CreateHardlyDto } from './dto/create-hardly.dto';
import { UpdateHardlyDto } from './dto/update-hardly.dto';
import PrismaService  from '../prisma/prisma.service';



@Injectable()
export class HardlyService {
  constructor(private prismaService: PrismaService) {
  }

  create(createHardlyDto: CreateHardlyDto) {
    return this.prismaService.hardly.create({ data: createHardlyDto})
  }

  findAll() {
    return this.prismaService.hardly.findMany()
  }

  findOne(id: number) {
    return this.prismaService.hardly.findUnique({where: { id }})
  }

  update(id: number, updateHardlyDto: UpdateHardlyDto) {
    return this.prismaService.hardly.update({where: { id }, data: updateHardlyDto})
  }

  remove(id: number) {
    return this.prismaService.hardly.delete({where: { id }})
  }
}
