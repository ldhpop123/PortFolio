import { Injectable } from '@nestjs/common';
import { CreateItemContentDto } from './dto/create-item_content.dto';
import { UpdateItemContentDto } from './dto/update-item_content.dto';
import { PrismaService } from 'src/prisma.service';
import { ItemContents, Prisma } from '@prisma/client'

@Injectable()
export class ItemContentService {
  constructor(private prisma: PrismaService) {}

  async contents(id: number): Promise<ItemContents[]> {
    return this.prisma.itemContents.findMany({
      where: { portfolioItemId: id },
    });
  }

  async createContent(createContentDto: CreateItemContentDto): Promise<ItemContents> {
    return this.prisma.itemContents.create({
      data: createContentDto,
    });
  }

  // async updateContent(updateContentDto: UpdateItemContentDto): Promise<ItemContents> {
  //   return this.prisma.itemContents.update({
  //     where: { id },
  //     data: {
  //       ...(updateContentDto?.type && { type: updateContentDto.type}),
  //       ...(updateContentDto?.content && { content: updateContentDto.content }),
  //       ...(updateContentDto?.portfolioItemId && { portfolioItemId: updateContentDto.portfolioItemId})
  //     }
  //   })
  // }

  // findAll() {
  //   return `This action returns all itemContent`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} itemContent`;
  // }

  // update(id: number, updateItemContentDto: UpdateItemContentDto) {
  //   return `This action updates a #${id} itemContent`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} itemContent`;
  // }
}
