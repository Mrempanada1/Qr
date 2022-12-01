export {Usuario} from './usuario'

export class Asignaturas{
    id: number;
    username:string;
    fecha: Date;
    correo:string
    item:any[];
    constructor(titulo: string){
        this.username= this.username;
        this.correo= this.correo;
        this.fecha = new Date();
        this.item=[];
        this.id=new Date().getDate();
    }
}