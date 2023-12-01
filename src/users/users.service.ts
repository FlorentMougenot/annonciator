import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor (private readonly prisma : PrismaService){}

  public async create(createUserDto: CreateUserDto) {
    const newUser = await this.prisma.users.create({
      data: {
        Pseudo: createUserDto.pseudo,
        Mail: createUserDto.mail,
      },
    });
    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  public async getByUUID(uuid: string) {
    const trackUser = await this.prisma.users.findUnique({
      where: {
        UUID: uuid,
      },
    });
    return trackUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
