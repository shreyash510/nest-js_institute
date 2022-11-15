import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Course} from 'src/database/entities/course.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CourseService {

// intract with database..constructor is called automatically first time.
    constructor(
        @InjectRepository(Course) private courseRepo: Repository<Course>,
      ) {}
    
    //   private readonly courses: Course[] = [];
    
      findAll() {
        return this.courseRepo.find();
      }
    
      findOne(id: number) {
        return this.courseRepo.findOneBy({ id });
      }
    
      async create(registerModel: any) {
        // console.log(registerModel)
        const course = this.courseRepo.create(registerModel)

        return this.courseRepo.save(course)
      }
    
      async update(id:number , body: Partial<Course>){
        const uCourse = await this.courseRepo.findOneBy({id});
        if(!uCourse){
            throw new NotFoundException('User Not Found');
        }
        Object.assign(uCourse, body)
        return this.courseRepo.save(uCourse);
      }
    
      async remove(id:number){
        const course = await this.courseRepo.findOneBy({id})
        if(!course){
            throw new NotFoundException('User Not found');
        }
        return this.courseRepo.remove(course);
      }
}
 