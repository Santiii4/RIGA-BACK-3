import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    Price: number;

    @Column()
    img: string;

    @Column({
        default: true
    })
    active: boolean;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    constructor(firstname:string, Price:number, img: string){
        this.firstname = firstname;
        this.Price = Price;
        this.img = img;
    }
}
