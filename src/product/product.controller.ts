import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller("products")
export class ProductController {
    constructor (private readonly productService: ProductService) {
    }
    @Post()
    public create(@Body() CreateProductDto: CreateProductDto){
        return this.productService.create(CreateProductDto);
    }
    @Get()
    getProduct(): string[] {
        return this.productService.getProducts();
    }
}