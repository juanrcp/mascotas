import { Component, Input, OnInit } from '@angular/core';
import { MascotaInterfaz } from '../../modelo/mascota-interfaz';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { MascotasService } from '../../modelo/mascotas.service';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent implements OnInit {

  @Input() detalleMascota?: any;

  constructor(
    private mascotaService: MascotasService,
    private location: Location
  ) { }

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

  //Eliminamos la mascota a partir de la mascota inyectada.
  deleteMascota(): void{
    console.log(this.detalleMascota.id);
    this.mascotaService.delete(this.detalleMascota.id).then(() => {
      alert("Mascota eliminada correctamente.");
      
    }, (error) => {
      console.log(error);
    });
  }

}
