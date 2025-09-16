import { PartialType } from '@nestjs/mapped-types';
import { CreateItemContentDto } from './create-item_content.dto';

export class UpdateItemContentDto extends PartialType(CreateItemContentDto) {}
