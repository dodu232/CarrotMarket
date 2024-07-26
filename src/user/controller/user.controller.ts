import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // 회원 가입
  @Post('signUp')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  // 로그인
  @Post('login')
  login(@Body() dto: LoginUserDto) {}

  // 회원 조회

  // 회원 탈퇴

  // 닉네임 변경
}
