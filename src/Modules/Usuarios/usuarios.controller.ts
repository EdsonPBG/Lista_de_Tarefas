// usuarios.controller.ts
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './DTO/create-usuario.dto';
import { UpdateUsuarioDto } from './DTO/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController 
{
    constructor(
        private readonly usuariosService: UsuariosService
    ){}

    @Post()
    criarUsuario(@Body() createUsuarioDto: CreateUsuarioDto) 
    {
        return this.usuariosService.criarUsuario(createUsuarioDto)
    }

    @Get()
    buscarUsuarios()
    {
        return this.usuariosService.buscarUsuarios()
    }

    @Get(':id')
    buscarPorId(@Param('id') id: string)
    {
        return this.usuariosService.buscarPorId(id)
    }

    @Patch(':id')
    editarUsuario(
        @Param('id') id: string,
        @Body() updateUsuarioDto: UpdateUsuarioDto)
    {
        return this.usuariosService.editarUsuario(id, updateUsuarioDto);
    }

    @Delete(':id')
    deletarUsuario(@Param('id') id: string)
    {
        return this.usuariosService.deletarUsuario(id);
    }
}
