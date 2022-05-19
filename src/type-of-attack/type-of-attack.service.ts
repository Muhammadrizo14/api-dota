import { Injectable } from '@nestjs/common';
import { CreateTypeOfAttackDto } from './dto/create-type-of-attack.dto';
import { UpdateTypeOfAttackDto } from './dto/update-type-of-attack.dto';
import PrismaService from '../prisma/prisma.service';

@Injectable()
export class TypeOfAttackService {
  constructor(private prismaService: PrismaService) {
  }

  create(createTypeOfAttackDto: CreateTypeOfAttackDto) {
    return this.prismaService.typeOfAttack.create({data: createTypeOfAttackDto})
  }

  findAll() {
    return this.prismaService.typeOfAttack.findMany()
  }

  findOne(id: number) {
    return this.prismaService.typeOfAttack.findUnique({where: {id}});
  }

  update(id: number, updateTypeOfAttackDto: UpdateTypeOfAttackDto) {
    return this.prismaService.typeOfAttack.update({where: {id}, data: updateTypeOfAttackDto})
  }

  remove(id: number) {
    return this.prismaService.typeOfAttack.delete({where: {id}});
  }
}
