import { DataSource, Repository } from "typeorm";
import { Image } from "./image.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ImageRepository{
    private repository: Repository<Image>;
    
    constructor(private readonly dataSource: DataSource){
        this.repository = this.dataSource.getRepository(Image);
    }

    async createImage(image){
        return this.repository.save(image);
    }
}