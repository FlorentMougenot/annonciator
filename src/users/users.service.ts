import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedAnswer from 'src/normalized_answer';

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
    const trackUser = new NormalizedAnswer(
      `User ${uuid} has been found`, 
      await this.prisma.users.findUnique({
      where: {
        UUID: uuid,
      },
    }),
    );
    return trackUser;
  }

  public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
    const updatedUser = new NormalizedAnswer(
    `User ${updateUserDto.pseudo} has been updated`, 
    await this.prisma.users.update({
      where: {
        UUID: uuid,
      },
      data: {
        Pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
        Mail: !!updateUserDto.mail ? updateUserDto.mail : undefined,
      },
    }),
    );
    return updatedUser;
  }

  public async deleteUserByUUID (uuid : string){
    const deleteUser = new NormalizedAnswer(
      `User ${uuid} has been deleted`,
      await this.prisma.users.delete({
      where: {
        UUID: uuid,
      },
    }),
    );
    return deleteUser;
  }
}
