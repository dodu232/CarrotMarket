import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/user/service/user.service";
import { CreateUserDto } from "../dto/createUser.dto";

@Controller('user')
export class UserController{
    constructor(private userService: UserService) {}

    @Post()
    createUser(
        @Body() createUserDto: CreateUserDto
    ){
        return this.userService.createUser(createUserDto);
    }
}