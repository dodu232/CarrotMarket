import { Injectable } from '@nestjs/common';
import { ImageRepository } from './image.repository';
import * as fs from 'fs';

@Injectable()
export class ImageService {
    constructor(private readonly ImageRepository: ImageRepository){}

    async createImage(file: Express.Multer.File){
        const imageBuffer = await fs.promises.readFile(file.path);

        return this.ImageRepository.createImage(imageBuffer);
    }
}
