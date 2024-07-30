import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import { UserRepository } from '../repository/user.repository';
import { ImageService } from 'src/image/image.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly imageService: ImageService,
  ) {}

  async createUser(file: Express.Multer.File, createUserDto: CreateUserDto) {
    const imageId = await this.imageService.createProfileImage(file);

    return this.userRepository.createUser(imageId, createUserDto);
  }
}
