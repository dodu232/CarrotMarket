import { Injectable } from "@nestjs/common";
import { LoginDto } from "src/auth/dto/login.dto";
import { VerifyCodeDto } from "src/auth/dto/verityCode.dto";
import { PhoneVerify } from "src/auth/entity/phoneVerity.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class PhoneVerifyRepository{
    private readonly repository: Repository<PhoneVerify>;

    constructor(private readonly dataSource: DataSource){
        this.repository = this.dataSource.getRepository(PhoneVerify);
    }

    async createVerifyCode(dto: LoginDto, code: string){
        const phoneVerify = new PhoneVerify();
        phoneVerify.phone = dto.phone;
        phoneVerify.code = code;
        phoneVerify.regDate = new Date();

        return this.repository.save(phoneVerify);
    }

    async countCreateCode(phone: string): Promise<number> {
        const start = new Date()
        start.setHours(0, 0, 0, 0);
        const end = new Date()
        end.setHours(23, 59 ,59, 999);

        return this.repository.createQueryBuilder('pv')
        .where('pv.phone = :phone', {phone})
        .andWhere('pv.reg_date BETWEEN :start AND :end', {start, end})
        .getCount()

    }

    async findVerifyCode(dto: VerifyCodeDto): Promise<PhoneVerify>{
        return this.repository.findOneBy({ phone: dto.phone });
    }

    async deleteVerifyCode(dto: VerifyCodeDto){
        return this.repository.delete(dto.phone);
    }

}