import { Injectable } from '@angular/core';
import {Asignaturas} from 'src/interfaces/asignaturas';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  public asignaturas:Asignaturas[]=[];
  constructor() { 
    
  }
}
