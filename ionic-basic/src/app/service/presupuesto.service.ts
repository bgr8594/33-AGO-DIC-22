import { Injectable } from '@angular/core';
import { gasto } from './gasto.model';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  gastos: gasto[]=[];

  constructor() { }

  public agregarGasto(monto: number, gasto: string){
    this.gastos.push({monto,gasto});
  }

  public mostrarGastos() {
    return this.gastos;
  }
}