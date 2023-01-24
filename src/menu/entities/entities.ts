import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id:number;
 
    @Column()
    name:string;
 
    @Column()
    ingredientes:string;
 
    @Column()
    preparacion:string;
 
    @Column()
    tipo:string;
 
    @Column()
    pais:string;
}
