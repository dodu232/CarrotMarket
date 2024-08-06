import { IsEmail, IsEmpty, IsOptional, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(11)
  readonly phone: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  readonly email: string;
}
