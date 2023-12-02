import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @Length(8, 50)
    pseudo : string;

    @IsEmail()
    @Length(10, 100)
    mail : string;
}
