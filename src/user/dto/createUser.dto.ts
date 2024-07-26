import { Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MaxLength(16)
  @MinLength(2)
  @Matches(RegExp('^[가-힣a-zA-Z0-9]*$'), {
    message: '입력값을 다시 확인하세요.',
  })
  readonly nickname: string;

  readonly phone: string;

  readonly email: string;

  readonly profile: number;
}
