import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PhoneVerity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'phone'})
    phone: string;

    @Column({ name: 'code'})
    code: string;

    @Column({name: 'reg_date'})
    regDate: Date;
}