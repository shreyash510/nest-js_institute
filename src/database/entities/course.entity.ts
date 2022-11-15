import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Student } from './student.entity';

@Entity({ name: 'course' })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({nullable : true})
  // curseId : number;

  @Column({ nullable: true })
  name: string;

  @Column({})
  duration: number;

  @Column({ nullable: true })
  fees: number;

  @ManyToOne(() => Student, (student) => student.courses)
  @JoinColumn()
    student : Student


}
