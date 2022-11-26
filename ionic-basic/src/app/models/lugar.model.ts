export class Lugar {
    // este id no se debe enviar al momento de actualizar como parte
    // ó propiedad del objeto, solo es para ir directo
    // por id, where id= '<idEnviado>'
    id?: string; // id de firebase no corresponde a mi modelo

    nombre: string;
  
    ubicacion?:{latitud:string, longitud:string}
  
  
  
        constructor(){
  
            this.nombre=''
  
        }
  
        public setUbicacion(latitud: string, Longiutd: string){
  
            this.ubicacion.latitud= latitud;
  
            this.ubicacion.longitud = Longiutd;
  
        }
    }