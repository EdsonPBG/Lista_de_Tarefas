import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

// create-tarefa.dto.ts
export class CreateTarefaDto 
{
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    titulo!: string

    @IsString()
    @IsOptional()
    descricao?: string

    @IsString()
    @IsOptional()
    status?: string
}
