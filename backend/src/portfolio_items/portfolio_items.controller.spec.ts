import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioItemsController } from './portfolio_items.controller';
import { PortfolioItemsService } from './portfolio_items.service';

describe('PortfolioItemsController', () => {
  let controller: PortfolioItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortfolioItemsController],
      providers: [PortfolioItemsService],
    }).compile();

    controller = module.get<PortfolioItemsController>(PortfolioItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
