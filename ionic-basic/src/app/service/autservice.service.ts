import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app"
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User } from '../models/user.model';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { Lugar } from '../models/lugar.model';
import { getDatabase } from "firebase/database";

const firebaseApp = initializeApp(environment.firebaseConfig);
const dbCloudFirestore = getFirestore(firebaseApp);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoged : any = false;
  auth: Auth;
  db = dbCloudFirestore;
  constructor() {
    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user => {
      if(user!= undefined || user != null){
        this.isLoged = user;
      }
    });
   }

   tieneSesion(){
    return this.isLoged;
   }

   getStateAuth(){
    return this.auth;
   }
     //login
  onLogin(user: User): Promise<any>{
      return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }
   //register
   onRegister(user: User): Promise<any>{
      return  createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }   
  async altaLugar(lugar: Lugar){
    const lugarTemp: any ={
      nombre:lugar.nombre,
      ubicacion: {longitud:'', latitud:''}
    };
    const docRef = await addDoc(collection(this.db,'lugar'), lugarTemp);
    console.log("Documento escrito con id: "+docRef.id);
  }

  async getLugares(destinos: Lugar[]) {
    await getDocs(collection(this.db, 'lugar'))
    .then((querySnapshot: any)=>{
      destinos.splice(0, destinos.length);
      querySnapshot.forEach((doc)=>{
        let data: any = doc.data();
          let lugar: Lugar = new Lugar();
          lugar.nombre = data.nombre;
          console.log(doc.id);
          destinos.push(lugar);
      });
    })
    .catch(error=>{
      console.log('Ocurrio un erro en el guardardo:'+error);
    });
  }  
}