import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, Delete, Put } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { TodoList } from "../entities/todolist.entity";
import { TodoListService } from "../services/todolist.services";

@Controller('/todolist')
export class TodoListController{
    constructor (private readonly todoListService: TodoListService){}

/**
* @Get de mostrar tudo
 */
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<TodoList[]>{
        return this.todoListService.findAll()
    }

/**
 * @Get mostrar item pelo id
 */

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param('id', ParseIntPipe)
        id: number
    ): Promise<TodoList>{
        return this.todoListService.findById(id);
    }

/**
 * @Get mostrar item pelo nome
 */
    @Get('todolist/:todo')
    @HttpCode(HttpStatus.OK)
    findByNome(
        @Param('todo')todo: string): Promise<TodoList[]>{
            return this.todoListService.findByName(todo);
    }

/**
 * Criação de item @Post
 */    
    @Post()
    @HttpCode(HttpStatus.OK)
    create(
        @Body()
        todo: TodoList
    ): Promise<TodoList>{
        return this.todoListService.create(todo);
    }
/**
 * @Put Criação de um item 
 */ 
    @Put()
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        todo: TodoList
    ): Promise<TodoList>{
        return this.todoListService.update(todo);
    }
/**
 * Deletar um item @delete
 */ 
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id: number
    ){
        return this.todoListService.delete(id);
    }
}