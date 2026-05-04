// app.module.ts
import { Module } from '@nestjs/common';
import { UsuariosModule } from './Modules/Usuarios/usuarios.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot
  ({
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'lab_listadetarefas',
    autoLoadModels: true,
    synchronize: true
  }),
  UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
