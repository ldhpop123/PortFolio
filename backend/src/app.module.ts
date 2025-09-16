import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemContentModule } from './item_content/item_content.module';
import { PortfolioItemsModule } from './portfolio_items/portfolio_items.module';

@Module({
  imports: [PortfolioItemsModule, ItemContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
