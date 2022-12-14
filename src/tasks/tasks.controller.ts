import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './DTO/create-task-dto';
import { GetTasksFilterDto } from './DTO/get-tasks-filter-dto';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-enum';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){

    }

    // @Get()
    // getTasks(@Query() filterDTO: GetTasksFilterDto ) :Task[]{

    //     if(Object.keys(filterDTO).length > 0){
    //         return this.tasksService.filterTask(filterDTO);
    //     }
    //     else{
    //         return this.tasksService.getAllTasks();
    //     }
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto):Task   {
    //     return this.tasksService.createTask(createTaskDto);

    // }

    @Get("/:id")
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task>{
        return this.tasksService.getTaskById(id);  
    }
    // @Delete("/:id")
    // deleteTaskById(@Param('id') id: string): void{
    //    this.tasksService.deleteTask(id);  
    // }

    // @Post("/:id")
    // markTaskInProgress(@Param('id') id:string,
    // @Body('status') status:TaskStatus
    // ):Task{
    //     return this.tasksService.updateTaskStatus(id, status);
    // }

}

