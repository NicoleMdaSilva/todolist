import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_todolist'})
export class TodoList{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100})
    todo: string;
    
}
