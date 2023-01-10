import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text'})
    lastName: string

    @Column()
    email: string

}