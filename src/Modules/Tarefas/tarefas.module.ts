// tarefas.module.ts
import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tarefas } from './tarefas.model';
import { Usuarios } from '../Usuarios/usuarios.model';

@Module({
  imports: [SequelizeModule.forFeature([Tarefas])],
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
