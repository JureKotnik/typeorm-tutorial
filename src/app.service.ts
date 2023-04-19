import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>,){

  }
  getAll(): Promise<User[]>{
    return this.usersRepository.find();// SELECT * from user
  }

  // getOneById(id: number): Promise<User>{
  //    return this.usersRepository.findOneOrFail(id);
  // }


  createUser(name: string): Promise<User>{
    const newUser = this.usersRepository.create({name});
    return this.usersRepository.save(newUser);//Insert
  }

  // async updateUser(name: string): Promise<User>{

  //   const user = await this.usersRepository.findOneOrFail(id);

  //   user.name = name;

  //   return this.usersRepository.save(user);//update

  // }

//  async deleteUser(id: number): Promise<User>{
//     const user = await this.usersRepository.findOneOrFail(id);

//     await this.usersRepository.remove(user);
//     return user;
//   }

  getHello(): string {
    return 'Hello World!';
  }
}
