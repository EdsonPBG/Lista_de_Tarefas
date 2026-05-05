// usuarios.model.ts
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Tarefas } from "../Tarefas/tarefas.model";

@Table
export class Usuarios extends Model
{   
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    usuarioId?: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome!: string

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    senha!: string

    @HasMany(() => Tarefas)
    tarefas!: Tarefas[]
}