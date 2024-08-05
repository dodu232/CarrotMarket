import { IsNotEmpty, IsString, Length } from "class-validator";

export class VerifyCodeDto{
    @IsNotEmpty()
    @IsString()
    @Length(11)
    readonly phone: string;

    @IsNotEmpty()
    @IsString()
    @Length(6)
    readonly code: string;
}