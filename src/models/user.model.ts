import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {

    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    password: string;

}