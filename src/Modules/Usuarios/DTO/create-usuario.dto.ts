// create-usuario.dto.ts
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUsuarioDto
{
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    nome!: string

    @IsEmail()
    @IsNotEmpty()
    email!: string

    @MinLength(6)
    @IsNotEmpty()
    senha!: string
}