import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions={
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'app',
      password: '1234',
      database: 'taskmanagement',
      entities: [__dirname + '/../**/*.entity.ts'],
      synchronize: true,
      dropSchema: true
};