import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { CreateUserDto } from "../dto/createUser.dto";

@Injectable()
export class UserRepository{
    private repository: Repository<User>;
    
    constructor(private readonly dataSource: DataSource){
        this.repository = this.dataSource.getRepository(User);
    }

    createUser(createUserDto: CreateUserDto){
        return this.repository.save(createUserDto);
    }
}