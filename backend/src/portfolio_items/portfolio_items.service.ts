import { Injectable } from '@nestjs/common';
import { CreatePortfolioItemDto } from './dto/create-portfolio_item.dto';
import { UpdatePortfolioItemDto } from './dto/update-portfolio_item.dto';
import { PrismaService } from 'src/prisma.service';
import { PortFolioItems, Prisma } from '@prisma/client'

@Injectable()
export class PortfolioItemsService {
  constructor(private prisma: PrismaService) {}

  async item(id: number): Promise<PortFolioItems | null> {
    return this.prisma.portFolioItems.findUnique({
      where: { id },
    });
  }

  async items(): Promise<PortFolioItems[]> {
    return this.prisma.portFolioItems.findMany();
  }

  async createItem(createItemDto: CreatePortfolioItemDto): Promise<PortFolioItems> {
    return this.prisma.portFolioItems.create({
      data: createItemDto,
    });
  }

  async updateItem(id: number, updateItemDto: UpdatePortfolioItemDto): Promise<PortFolioItems> {
    return this.prisma.portFolioItems.update({
      where: { id },
      data: {
        ...(updateItemDto?.name && { name: updateItemDto.name }),
        ...(updateItemDto?.src && { src: updateItemDto.src }),
      }
    });
  }

  async deleteItem(id: number): Promise<PortFolioItems> {
    return this.prisma.portFolioItems.delete({
      where: { id },
    });
  }
}
