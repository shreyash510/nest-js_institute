import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({name : 'student'})
export class Student{
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({nullable : true})
    // curseId : number;

    @Column({nullable : true})
    name : string

    @Column({})
    age : number;

    @Column({nullable:true})
    email : string
}
