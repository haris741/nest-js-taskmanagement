import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './DTO/create-task-dto';
import { GetTasksFilterDto } from './DTO/get-tasks-filter-dto';
@Injectable()
export class TasksService {
    // private tasks: Task[]= [];


    // getAllTasks(): Task[]{
    //     return this.tasks;
    // }

    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const {title, description} = createTaskDto;
    //     const task : Task = {


    //         id: uuid(),
    //         title,
    //         description,
    //         status : TaskStatus.OPEN,

    //     };
    //     this.tasks.push(task);

    //     // good practice to return newly added resource
    //     return task;

    // }

    // getTaskById(id:String): Task{
    //     return this.tasks.find(task =>  task.id === id);
    // }

    // deleteTask(id:String): void{
    //     this.tasks= this.tasks.filter(task => task.id !== id);
    // }

    // updateTaskStatus(id:String, status:TaskStatus):Task{
    //     const task = this.tasks.find(task => task.id ===id);
    //     task.status = status;
    //     return task;
    // }
    // filterTask(filterDto: GetTasksFilterDto):Task[] {

    //     const {status, searchTerm} = filterDto;
    //     let tasks = this.getAllTasks();
    //     if(status){
    //         tasks = tasks.filter(task => task.status === status )
    //     }
    //     if (searchTerm){
    //         tasks = tasks.filter(task =>
    //                 task.title.includes(searchTerm) ||
    //                 task.description.includes(searchTerm)
    //             );
    //     }
    //     return tasks;

 
    // }


}
