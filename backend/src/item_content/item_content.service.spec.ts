import { Test, TestingModule } from '@nestjs/testing';
import { ItemContentService } from './item_content.service';

describe('ItemContentService', () => {
  let service: ItemContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemContentService],
    }).compile();

    service = module.get<ItemContentService>(ItemContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
