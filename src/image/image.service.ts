import { Injectable } from '@nestjs/common';
import { ImageRepository } from './image.repository';
import * as fs from 'fs';

@Injectable()
export class ImageService {
  constructor(private readonly imageRepository: ImageRepository) {}

  async createProfileImage(file: Express.Multer.File): Promise<number> {
    const imageBuffer = await fs.promises.readFile(file.path);

    const imageId = (await this.imageRepository.createProfileImage(imageBuffer))
      .id;

    return imageId;
  }
}
