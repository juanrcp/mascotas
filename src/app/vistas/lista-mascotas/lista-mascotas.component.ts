import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../modelo/mascotas.service';
import { MascotaInterfaz } from '../../modelo/mascota-interfaz';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  //Array donde guardaremos las mascotas. La inicializamos vacia. 
  mascotas: any[] = [];
  detalleMascota?: any;

  constructor(
    private mascotaService: MascotasService,
    private location: Location
    
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  //Nos suscribimos a mascotaService para extraer las mascotas de la BBDD
  getAll(): void{

    this.mascotaService.getAll().subscribe((mascotasSnapshot: any) => {
      this.mascotas = [];
      mascotasSnapshot.forEach((mascotasData: any) =>{
        console.log(mascotasData);
        this.mascotas.push({
          //Id de la base de datos NO de la mascota
          id: mascotasData.payload.doc.id,
          //En este data es donde guardamos la lista de objetos (mascotas) 
          //y lo extraemos con la propiedad data
          data: mascotasData.payload.doc.data()
        })
      });
    });
  }

  onSelect(mascota: any){
    this.detalleMascota = mascota;

  }

}
