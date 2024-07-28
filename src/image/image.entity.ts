import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'image'})
export class Image{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    groupId: number;

    @Column('blob')
    blob: Buffer;
}