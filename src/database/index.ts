import { TypeOrmModule } from '@nestjs/typeorm';

import { Student } from './entities/student.entity';
import {Course} from './entities/course.entity'

export const typeOrmModuleConfig = () =>
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306, 
    username: 'root',
    password: 'Root@03',
    database: 'institute',
    entities: [Student,Course],
    synchronize: true, // only for dev env
  });
  // console.log('database file')

