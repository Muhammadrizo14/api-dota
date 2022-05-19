import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

import PrismaService from "../prisma/prisma.service";

@Injectable()
export class RolesService {
  constructor(private prismaService: PrismaService) {
  }

  create(createRoleDto: CreateRoleDto) {
    return this.prismaService.roles.create({ data: createRoleDto })
  }

  findAll() {
    return this.prismaService.roles.findMany()
  }

  findOne(id: number) {
    return this.prismaService.roles.findUnique({where: {id}});
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.prismaService.roles.update({where: {id}, data: updateRoleDto})
  }

  remove(id: number) {
    return this.prismaService.roles.delete({where: {id}});
  }
}
