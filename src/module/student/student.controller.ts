import { 
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto, UpdateStudentDto } from './dto/create-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateStudentDto) {
    return this.studentService.create(body);
  }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updatedBody : UpdateStudentDto){
      return this.studentService.update(parseInt(id),updatedBody)
    }

  @Delete('/:id')
  removeStudent(@Param('id') id: string) {
    return this.studentService.remove(parseInt(id));
  }
}
