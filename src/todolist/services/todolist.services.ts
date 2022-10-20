import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { TodoList } from "../entities/todolist.entity";

@Injectable()
/**
 *@desc TodoList é o responsavel por pegar e modificar as informações no banco de dados
 */

export class TodoListService{
    constructor(
        @InjectRepository(TodoList)
        private todoListRepository: Repository<TodoList>
    ) {}

/**
 * @desc findAll - função @Get responsável por mostrar todas as informações ao usuario 
 */
    async findAll(): Promise<TodoList[]>{
        return await this.todoListRepository.find()
    }

/**
 * @desc findById - função @Get responsavel por mostrar informações por ID
 */
    async findById(id: number): Promise<TodoList>{
        let todo = await this.todoListRepository.findOne({
            where:{
                 id
            }
        })

        if(!todo)
            throw new HttpException('TODO não encontrado', HttpStatus.NOT_FOUND);
        return todo;
    }
/**
 * @desc findByName - função @Get reponsavel para encontrar por nome
 */
    async findByName(todo: string): Promise<TodoList[]>{
        return await this.todoListRepository.find({
            where:{
                todo: ILike(`%${todo}%`)
            }
        })
    }

/**
 * @desc create - função @Put responsavel por criar um item na tabela
 */   
    async create(todo: TodoList): Promise<TodoList>{
        return await this.todoListRepository.save(todo);
    }

/**
* @desc update - função @Post responsavel por encontrar um item pelo id e atualiza-lo
 */
    async update(todo: TodoList): Promise<TodoList>{
        let buscaTodo: TodoList = await this.findById(todo.id)

        if(!buscaTodo || !todo.id)
            throw new HttpException('TODO não encontrado', HttpStatus.NOT_FOUND)
        return await this.todoListRepository.save(todo);
    }

/**
* @desc delete - função @Delete responsavel por apagar um item pelo id
 */
    async delete(id: number): Promise<DeleteResult>{
        let buscaTodo = await this.findById(id)

        if(!buscaTodo)
            throw new HttpException('TODO não encontrado', HttpStatus.NOT_FOUND);
        return await this.todoListRepository.delete(id);
    }

}