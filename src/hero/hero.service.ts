import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import PrismaService from '../prisma/prisma.service';

@Injectable()
export class HeroService {
  constructor(private prismaService: PrismaService) {
  }

  create(createHeroDto: CreateHeroDto) {
    return this.prismaService.hero.create({ data: createHeroDto })
  }

  findAll() {
    return this.prismaService.hero.findMany({
      include:{
        Roles:{
          select:{
            id: true,
            title: true,
          }
        },
        Hardly:{
          select:{
            id: true,
            level: true
          }
        },
        Attribute:{
          select:{
            id: true,
            title: true,
            image_url: true
          }
        },
        TypeOfAttack:{
          select:{
            id: true,
            title: true
          }
        }
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.hero.findUnique({
      where: {id},
      include:{
        Roles:{
          select:{
            id: true,
            title: true,
          }
        },
        Hardly:{
          select:{
            id: true,
            level: true
          }
        },
        Attribute:{
          select:{
            id: true,
            title: true,
            image_url: true
          }
        },
        TypeOfAttack:{
          select:{
            id: true,
            title: true
          }
        }
      }
    });
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return this.prismaService.hero.update({where: {id}, data: updateHeroDto})
  }

  remove(id: number) {
    return this.prismaService.hero.delete({where: {id}});
  }
}
