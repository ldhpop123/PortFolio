import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioItemsService } from './portfolio_items.service';

describe('PortfolioItemsService', () => {
  let service: PortfolioItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioItemsService],
    }).compile();

    service = module.get<PortfolioItemsService>(PortfolioItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
