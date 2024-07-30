import { DataSource, Repository } from 'typeorm';
import { Image } from './image.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageRepository {
  private repository: Repository<Image>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Image);
  }

  async createProfileImage(imageBuffer: Buffer) {
    const image = new Image();
    image.groupId = 0; // 낱 장은 0
    image.blob = imageBuffer;

    return this.repository.save(image);
  }
}
