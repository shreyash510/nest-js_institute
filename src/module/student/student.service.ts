import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/database/entities/course.entity';
import { Student } from 'src/database/entities/student.entity';
import { Repository } from 'typeorm';
import { createStudent } from '../../utils/types';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}

  private readonly students: Student[] = [];

  findAll() {
    return this.studentRepo.find();
  }

  findOne(id: number) {
    return this.studentRepo.findOneBy({ id });
  }

  async create(registerModel: CreateStudentDto) {
    let studentModel = {
      name: registerModel.studentname,
      age: registerModel.age,
      email: registerModel.email,
    };
    let courseModel = {
      name: registerModel.coursename,
      fees: registerModel.fees,
      duration: registerModel.duration,
    };
    const student = this.studentRepo.create({ ...studentModel });
    const studentRes = await this.studentRepo.save(student);

    const course = this.courseRepo.create({ ...courseModel });
    course.student = studentRes;
    const courseRes = await this.courseRepo.save(course);
    console.log('ody is..', registerModel);
    return courseRes;
  }

  async update(id: number, body: Partial<Student>) {
    const uStudent = await this.studentRepo.findOneBy({ id });
    if (!uStudent) {
      throw new NotFoundException('User Not Found');
    }
    Object.assign(uStudent, body);
    return this.studentRepo.save(uStudent);
  }

  async remove(id: number) {
    const student = await this.studentRepo.findOneBy({ id });
    if (!student) {
      throw new NotFoundException('User Not found');
    }
    return this.studentRepo.remove(student);
  }
}
