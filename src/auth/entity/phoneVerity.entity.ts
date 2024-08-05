import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'phone_verify'})
export class PhoneVerify{
    @PrimaryColumn({name: 'phone'})
    phone: string;

    @Column({ name: 'code'})
    code: string;

    @Column({name: 'reg_date'})
    regDate: Date;
}