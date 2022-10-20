import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoListController } from "./controllers/todolist.controller";
import { TodoList } from "./entities/todolist.entity";
import { TodoListService } from "./services/todolist.services";

@Module({
    controllers: [TodoListController],
    exports: [TypeOrmModule],
    imports: [TypeOrmModule.forFeature([TodoList])],
    providers: [TodoListService]
})

export class todoListModule {};