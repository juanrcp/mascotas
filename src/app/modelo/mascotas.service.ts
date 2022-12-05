import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MascotaInterfaz } from './mascota-interfaz';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  //Coleccion de mascotas
  private coleccion = 'mascotas';

  constructor(private firebase: AngularFirestore) { }

  //Obtencion de listado de todas las mascotas
  getAll(): Observable<any>{
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  //Obtencion de los detalles de una mascota en concreto
  getDetalles(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  //Crear nuevo registro de mascota
  newMascota(mascota: any){
    return this.firebase.collection(this.coleccion).add(mascota);
  }

  //Modificar mascota
  updateMascota(id: string, mascota: any){
    return this.firebase.collection(this.coleccion).doc(id).update(mascota);
  }

  //Eliminar mascota
  delete(id: string){
    return this.firebase.collection(this.coleccion).doc(id).delete();
  }
  
}
