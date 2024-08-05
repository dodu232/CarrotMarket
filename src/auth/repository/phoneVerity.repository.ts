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

        return this.repository.save(phoneVerify);
    }

    async findVerifyCode(dto: VerifyCodeDto): Promise<PhoneVerify>{
        return this.repository.findOneBy({ phone: dto.phone });
    }

    async deleteVerifyCode(dto: VerifyCodeDto){
        return this.repository.delete(dto.phone);
    }

}