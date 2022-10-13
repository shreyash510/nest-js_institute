import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({name : 'course'})
export class Course{
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({nullable : true})
    // curseId : number;

    @Column({nullable : true})
    name : string

    @Column({})
    duration : number;

    @Column({nullable:true})
    fees : number
}
