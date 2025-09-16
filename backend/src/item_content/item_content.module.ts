import { Module } from '@nestjs/common';
import { ItemContentService } from './item_content.service';
import { ItemContentController } from './item_content.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ItemContentController],
  providers: [ItemContentService, PrismaService],
})
export class ItemContentModule {}
