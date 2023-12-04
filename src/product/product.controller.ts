import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller("products")
export class ProductController {
    constructor (private readonly productService: ProductService) {
    }
    @Post()
    public create(@Body() CreateProductDto: CreateProductDto){
        return this.productService.create(CreateProductDto);
    }
    @Get(':uuid')
    public getByUUID(@Param('uuid') uuid: string) {
      return this.productService.getByUUID(uuid);
    }
    @Patch(':uuid')
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateByUUID(uuid, updateProductDto);
  }
    @Delete(':uuid')
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.productService.deleteByUUID(uuid);
  }
}