// usuarios.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuarios } from './usuarios.model';
import { CreateUsuarioDto } from './DTO/create-usuario.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUsuarioDto } from './DTO/update-usuario.dto';

@Injectable()
export class UsuariosService 
{
    constructor(
        @InjectModel(Usuarios) private readonly usuarios: typeof Usuarios
    ){}

    async criarUsuario(createUsuarioDto: CreateUsuarioDto)
    {
        const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, 10);
        return this.usuarios.create({ ...createUsuarioDto, senha: hashedPassword }); //bcrypt.hash serve para criptografar as senhas dos usuarios
    }

    async buscarUsuarios()
    {
        return await this.usuarios.findAll({ attributes: { exclude: [ 'senha' ] } }); //Busca todos os usuarios mas esconde o campo senha
    }

    async buscarPorId(id: string)
    {
        const usuarios = await this.usuarios.findByPk(id, { attributes: { exclude: [ 'senha' ] } });
        if (!usuarios) throw new NotFoundException(`Usuário com id: ${id} não encontrado!`);
            return usuarios
    }

    async editarUsuario(id: string, updateUsuarioDto: UpdateUsuarioDto)
    {
        const usuario = await this.usuarios.findByPk(id);
        if (!usuario) throw new NotFoundException(`Usuário com id: ${id} não encontrado!`);
            return await usuario.update(updateUsuarioDto);
    }

    async deletarUsuario(id: string)
    {
        const usuario = await this.usuarios.findByPk(id);
            if (!usuario) throw new NotFoundException(`Usuário com id: ${id} não encontrado!`);
            await usuario.destroy();
                return {message: "Usuário removido com sucesso!"};
    }
}
