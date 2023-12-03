import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import NormalizedResponse from 'src/normalized_answer';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createProductDto: CreateProductDto) {
    return new NormalizedResponse(
      `Product ${createProductDto.name} has been registered`,
      await this.prisma.products.create({
        data: {
          Name: createProductDto.name,
          Description: createProductDto.description,
          Price: createProductDto.price,
          Author: {
            connect: {
              UUID: createProductDto.owner_uuid,
            },
          },
        },
      }),
    ).toJSON();
  }

  public async getByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been found`,
      await this.prisma.products.findUnique({
        where: {
          UUID: uuid,
        },
      }),
    ).toJSON();
  }
}