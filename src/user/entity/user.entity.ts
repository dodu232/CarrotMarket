import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  profile: number;

  @Column({ name: 'reg_date', type: 'timestamp' })
  regDate: Date;
}
