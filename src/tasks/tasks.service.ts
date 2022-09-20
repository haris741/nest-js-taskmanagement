import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './DTO/create-task-dto';
import { GetTasksFilterDto } from './DTO/get-tasks-filter-dto';
import { TaskRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository:TaskRepository,
    ){}


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

    async getTaskById(id:number): Promise<Task>{
       const found = this.taskRepository.findOneBy({
        id: id // where id is your column name
        });
        

       if (!found){
        throw  new NotFoundException(`No task found with id: "${id}"`)
       }

       return found;
    }

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
