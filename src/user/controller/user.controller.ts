import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/image/storage.config'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // 회원 가입
  @Post('signUp')
  @UseInterceptors(FileInterceptor('file', {storage}))
  createUser(@UploadedFile() file: Express.Multer.File, @Body() dto: CreateUserDto) {
    return this.userService.createUser(file, dto);
  }

  // 로그인
  @Post('login')
  login(@Body() dto: LoginUserDto) {}

  // 회원 조회

  // 회원 탈퇴

  // 닉네임 변경
}
