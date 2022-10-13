import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmModuleConfig } from './database';
import { CourseModule } from './module/course/course.module';
import { StudentModule } from './module/student/student.module';

@Module({
  imports: [typeOrmModuleConfig(), StudentModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
