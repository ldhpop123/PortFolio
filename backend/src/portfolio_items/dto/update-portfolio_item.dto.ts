import { PartialType } from '@nestjs/mapped-types';
import { CreatePortfolioItemDto } from './create-portfolio_item.dto';

export class UpdatePortfolioItemDto extends PartialType(CreatePortfolioItemDto) {}
