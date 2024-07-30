import { Injectable } from '@nestjs/common';
import { ImageGroup } from 'src/image/imageGroup.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ImageGroupRepository {
  private repository: Repository<ImageGroup>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(ImageGroup);
  }

  async getLastId(): Promise<ImageGroup> {
    return this.repository.findOne({
      order: {
        id: 'DESC',
      },
    });
  }
}
