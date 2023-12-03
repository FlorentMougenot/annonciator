import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, ProductService],
})
export class UsersModule {}
