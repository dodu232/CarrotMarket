import { IsEmail, IsNotEmpty, IsOptional, Length, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(16)
  @MinLength(2)
  @Matches(RegExp('^[가-힣a-zA-Z0-9]*$'), {
    message: '입력값을 다시 확인하세요.',
  })
  readonly nickname: string;

  @IsNotEmpty()
  @Length(11)
  readonly phone: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  readonly profile: number;
}
