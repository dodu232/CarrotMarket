import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { ImageRepository } from './image.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { ImageGroupService } from 'src/image/imageGroup.service';
import { ImageGroupRepository } from 'src/image/imageGroup.repository';
import { ImageGroup } from 'src/image/imageGroup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Image]),
    TypeOrmModule.forFeature([ImageGroup]),
  ],
  controllers: [ImageController],
  providers: [
    ImageService,
    ImageRepository,
    ImageGroupService,
    ImageGroupRepository,
  ],
  exports: [ImageGroupRepository],
})
export class ImageModule {}
