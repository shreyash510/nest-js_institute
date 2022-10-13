import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto } from './dto/course-dto';


@Controller('course')
export class CourseController {
    constructor(private readonly courseService : CourseService){}

    @Get()
    findAll() {
      return this.courseService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.courseService.findOne(id);
    }
  
    @Post()
    create(@Body() body: CreateCourseDto) {
      return this.courseService.create(body);
    }
  
      @Patch(':id')
      update(@Param('id') id:string, @Body() updatedBody : UpdateCourseDto){
        return this.courseService.update(parseInt(id),updatedBody)
      }
  
    @Delete('/:id')
    removeStudent(@Param('id') id: string) {
      return this.courseService.remove(parseInt(id));
    }

}
