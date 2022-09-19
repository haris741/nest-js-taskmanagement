import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Book } from './tasks/entities/task.entity';
import { typeOrmConfig } from './config/typeOrmConfig';
@Module({
  imports: [TasksModule,
    TypeOrmModule.forRoot(
      typeOrmConfig
    ),
  
  
  
  ],

  
})
export class AppModule {}
