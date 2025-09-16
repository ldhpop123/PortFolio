import { Module } from '@nestjs/common';
import { PortfolioItemsService } from './portfolio_items.service';
import { PortfolioItemsController } from './portfolio_items.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PortfolioItemsController],
  providers: [PortfolioItemsService, PrismaService],
})
export class PortfolioItemsModule {}
