// tarefas.model.ts
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Usuarios } from "../Usuarios/usuarios.model";

@Table
export class Tarefas extends Model
{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    tarefaId!: string

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    titulo!: string

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    descricao?: string

    @Column({
        type: DataType.ENUM('Pendente','Em Andamento','Finalizado'),
        defaultValue: 'Pendente',
        allowNull: true
    })
    status?: string

    @ForeignKey(() => Usuarios)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    usuarioId?: string

    @BelongsTo(() => Usuarios)
    usuario!: Usuarios   
}