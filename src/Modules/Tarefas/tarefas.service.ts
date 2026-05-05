// tarefas.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTarefaDto } from './DTO/create-tarefa.dto';
import { UpdateTarefaDto } from './DTO/update-tarefa.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tarefas } from './tarefas.model';

@Injectable()
export class TarefasService 
{
  constructor(
    @InjectModel(Tarefas) private readonly tarefas: typeof Tarefas
  ){}

  async criarTarefas(createTarefaDto: CreateTarefaDto)
  {
    return await this.tarefas.create({ ...createTarefaDto });
  }

  async buscarTarefas() 
  {
    return await this.tarefas.findAll();
  }

  async buscarPorId(id: string) 
  {
    const encontrado = await this.tarefas.findByPk(id)
      if (!encontrado) throw new NotFoundException(`Tarefas com o id: ${id} não encontrado`)
        return encontrado;
  }

  async editartarefas(id: string, updateTarefaDto: UpdateTarefaDto) 
  {
    const encontrado = await this.tarefas.findByPk(id)
      if (!encontrado) throw new NotFoundException(`Tarefas com o id: ${id} não encontrado`)
        return await encontrado.update(updateTarefaDto);
  }

  async deletarTarefas(id: string) 
  {
    const encontrado = await this.tarefas.findByPk(id)
      if (!encontrado) throw new NotFoundException(`Tarefas com o id: ${id} não encontrado`)
        return 'Tarefa exlcuída com sucesso!';
  }
}
