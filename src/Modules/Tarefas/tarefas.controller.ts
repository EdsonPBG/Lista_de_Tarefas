// tarefas.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './DTO/create-tarefa.dto';
import { UpdateTarefaDto } from './DTO/update-tarefa.dto';

@Controller('tarefas')
export class TarefasController {
    constructor(
      private readonly tarefasService: TarefasService
    ) {}

    @Post()
    criarTarefas(@Body() createTarefaDto: CreateTarefaDto) 
    {
      return this.tarefasService.criarTarefas(createTarefaDto);
    }

    @Get()
    buscarTarefas() 
    {
      return this.tarefasService.buscarTarefas();
    }

    @Get(':id')
    buscarPorId(@Param('id') id: string) 
    {
      return this.tarefasService.buscarPorId(id);
    }

    @Patch(':id')
    editarTarefas(
      @Param('id') id: string, 
      @Body() updateTarefaDto: UpdateTarefaDto) 
    {
      return this.tarefasService.editartarefas(id, updateTarefaDto);
    }

    @Delete(':id')
    deletarTarefas(@Param('id') id: string) {
      return this.tarefasService.deletarTarefas(id);
    }
}
