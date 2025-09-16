import { Test, TestingModule } from '@nestjs/testing';
import { ItemContentController } from './item_content.controller';
import { ItemContentService } from './item_content.service';

describe('ItemContentController', () => {
  let controller: ItemContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemContentController],
      providers: [ItemContentService],
    }).compile();

    controller = module.get<ItemContentController>(ItemContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
