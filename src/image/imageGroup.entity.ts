import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'image_group' })
export class ImageGroup {
  @PrimaryGeneratedColumn()
  id: number;
}
