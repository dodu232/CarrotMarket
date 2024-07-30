import { Injectable } from '@nestjs/common';
import { ImageGroupRepository } from 'src/image/imageGroup.repository';

@Injectable()
export class ImageGroupService {
  constructor(private readonly imageGroupRepository: ImageGroupRepository) {}

  async getLastId(): Promise<number> {
    return (await this.imageGroupRepository.getLastId()).id;
  }
}
