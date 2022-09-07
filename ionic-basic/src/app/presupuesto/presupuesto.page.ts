import { Component, OnInit } from '@angular/core';
import { gasto } from '../servicio/gasto.model';
import { PresupuestoService } from '../servicio/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  public gastos: string[]=['Directos','Fijos', 'Variables'];
  public selectedValue: any;
  public monto: number;
  public resultados: string;
  public errResultados: string='light';
  public gastosList:gasto[]=[];

  constructor(private presupuestoService :PresupuestoService) { }

  ngOnInit() {
    this.gastosList = this.presupuestoService.mostrarGastos();
  }

  customPopoverOptions: any = {
    header: 'Seleccion de gastos',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto'
  };

  cambioValor(value){
    //console.log(value);
  }
  guardar(){
    this.resultados ="";
    if(this.monto!=null && this.selectedValue!=null){
      this.errResultados = 'success';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n';
      this.presupuestoService.agregarGasto(this.monto, this.selectedValue);
      this.gastosList = this.presupuestoService.mostrarGastos();
      this.limpiarCampos();
    }
    else{
      this.errResultados = 'danger';
      this.resultados ="No a completado los campos del formulario";
    }
  } 

  limpiarCampos(){
    this.monto =null;
    this.selectedValue =null;
  }
}