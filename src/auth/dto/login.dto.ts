import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  readonly phone: string;

  readonly email: string;
}
