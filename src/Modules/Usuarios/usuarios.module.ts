// usuarios.module.ts
import { Module } from '@nestjs/common';
import { UsuariosController } from './../../Modules/Usuarios/usuarios.controller';
import { UsuariosService } from './../../Modules/Usuarios/usuarios.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuarios } from './usuarios.model';

@Module({
  imports: [SequelizeModule.forFeature([Usuarios])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
