import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/createUser.dto';

@Injectable()
export class UserRepository {
  private repository: Repository<User>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(User);
  }

  // 회원 가입
  createUser(imageId: number, createUserDto: CreateUserDto) {
    const user = new User();
    user.nickname = createUserDto.nickname;
    user.phone = createUserDto.phone;
    user.email = createUserDto.email;
    user.profile = imageId;

    return this.repository.save(user);
  }

  //
}
