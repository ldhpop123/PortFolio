import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpException, HttpStatus} from '@nestjs/common';
import { PortfolioItemsService } from './portfolio_items.service';
import { CreatePortfolioItemDto } from './dto/create-portfolio_item.dto';
import { UpdatePortfolioItemDto } from './dto/update-portfolio_item.dto';

@Controller('portfolio-items')
export class PortfolioItemsController {
  constructor(private readonly portfolioItemsService: PortfolioItemsService) {}
  
  @Get(':id')
  async item(@Param('id', ParseIntPipe) id: number) {
    const foundItem = await this.portfolioItemsService.item( id );

    if (foundItem == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }

    return foundItem;
  }

  @Get()
  async items() {
    const foundItems = await this.portfolioItemsService.items();

    return foundItems
  }

  @Post()
  async createItem(@Body() createItemDto: CreatePortfolioItemDto) {
    const createdItem = await this.portfolioItemsService.createItem(createItemDto);
    
    return createdItem;
  }

  // @Patch(':id')
  // async updateItem(
  //   @Param('id') id: string, 
  //   @Body() updateItemDto: UpdateItemDto) {
  //   const updatedItem = await this.itemsService.updateItem( +id, updateItemDto );
    
  //   return updatedItem;
  // }

  // @Delete(':id')
  // async deleteItem(@Param('id') id: string) {
  //   try {
  //     const removedItem = await this.itemsService.deleteItem(+id);

  //     if (removedItem == null) {
  //       throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  //     }

  //     return removedItem;
  //   } catch (error) {
  //     console.log('삭제중 오류 발생', error);
  //     throw new HttpException('삭제 중 오류:', HttpStatus.INTERNAL_SERVER_ERROR)
  //   }
  // }
}
