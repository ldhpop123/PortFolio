import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { ItemContentService } from './item_content.service';
import { CreateItemContentDto } from './dto/create-item_content.dto';
import { UpdateItemContentDto } from './dto/update-item_content.dto';

@Controller('item-content')
export class ItemContentController {
  constructor(private readonly itemContentService: ItemContentService) {}

  @Get(':id')
  async contents(@Param('id', ParseIntPipe) id: number) {
    const foundContents = await this.itemContentService.contents( id );

    if (foundContents == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }

    return foundContents;
  }

  @Post()
  async createContent(@Body() createContentDto: CreateItemContentDto) {
    const createdContent = await this.itemContentService.createContent(createContentDto);
    
    return createdContent;
  }

  // ContentID
  // @Patch(':id')
  // async updateContent(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateContentDto: UpdateItemContentDto) {

  //     const updatedContent = await this.itemContentService.updateContent( id, updateContentDto );

  //     return updatedContent
  // }
}
