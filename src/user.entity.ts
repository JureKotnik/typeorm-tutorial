import { Entity , Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Pet } from "./pet.entity";
import { type } from "os";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Pet, pet => pet.owner)
    pets: Pet[]
}