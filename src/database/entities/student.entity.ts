import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Course } from './course.entity';

@Entity({ name: 'student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({nullable : true})
  // curseId : number;

  @Column({ nullable: true })
  name: string;

  @Column({})
  age: number;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => Course, (course) => course.student, {
    eager: true,
    cascade: true,
  })
  courses: Course[];
}
