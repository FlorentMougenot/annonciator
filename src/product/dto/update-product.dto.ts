import { OmitType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsOptional } from 'class-validator';

export class UpdateProductDto extends OmitType(CreateProductDto, [
  'owner_uuid',
] as const) {
  @IsOptional()
  public name: string;
  @IsOptional()
  public description: string;
  @IsOptional()
  public price: number;
}