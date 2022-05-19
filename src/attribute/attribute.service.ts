import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import PrismaService from '../prisma/prisma.service';


@Injectable()
export class AttributeService {
  constructor(private prismaService: PrismaService) {
  }

  create(createAttributeDto: CreateAttributeDto) {
    return this.prismaService.attribute.create({data: createAttributeDto})
  }

  findAll() {
    return this.prismaService.attribute.findMany();
  }

  findOne(id: number) {
    return this.prismaService.attribute.findUnique({where: { id }});
  }

  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return this.prismaService.attribute.update({where: { id }, data: updateAttributeDto});
  }

  remove(id: number) {
    return this.prismaService.attribute.delete({where: {id}});
  }
}
