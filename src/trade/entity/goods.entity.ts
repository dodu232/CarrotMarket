import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'goods' })
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seller_id: number;

  @Column()
  buyer_id: number;

  @Column()
  image_id: number;

  @Column()
  title: string;

  @Column()
  category: number;

  @Column()
  content: string;

  @Column({ name: 'reg_deate', type: 'timestamp' })
  regDate: Date;

  @Column()
  chat: number;

  @Column()
  view: number;

  @Column()
  like: number;

  @Column()
  state: string;
}
