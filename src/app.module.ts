import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoList } from './todolist/entities/todolist.entity';
import { todoListModule } from './todolist/todolist.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_todolist',
    entities: [TodoList],
    synchronize: true
  }),
todoListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
