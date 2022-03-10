import { Entity, Column, PrimaryGeneratedColumn,DeleteDateColumn } from 'typeorm';

@Entity()
export class Loan {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    day: string;
    @Column()
    reason: string;
    @Column()
    quantity: number;
    @Column()
    interest: number;
    @DeleteDateColumn()
    deleteAt?: Date;

}