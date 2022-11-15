import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/database/entities/student.entity';
import { Course } from 'src/database/entities/course.entity';

// forFeature() - method to define which repositories are registered in the current scope. 
@Module({
  imports: [TypeOrmModule.forFeature([Student]),
            TypeOrmModule.forFeature([Course])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
