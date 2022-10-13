import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Student } from 'src/database/entities/student.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}

  private readonly students: Student[] = [];

  findAll() {
    return this.studentRepo.find();
  }

  findOne(id: number) {
    return this.studentRepo.findOneBy({ id });
  }

  create(registerModel: any) {
    const student = this.studentRepo.create(registerModel)
    return this.studentRepo.save(student)
  }

  async update(id:number , body: Partial<Student>){
    const uStudent = await this.studentRepo.findOneBy({id});
    if(!uStudent){
        throw new NotFoundException('User Not Found');
    }
    Object.assign(uStudent, body)
    return this.studentRepo.save(uStudent);
  }

  async remove(id:number){
    const student = await this.studentRepo.findOneBy({id})
    if(!student){
        throw new NotFoundException('User Not found');
    }
    return this.studentRepo.remove(student);
  }

}
