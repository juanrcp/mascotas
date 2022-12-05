import { Component, Input, OnInit } from '@angular/core';
import { MascotaInterfaz } from '../../modelo/mascota-interfaz';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent implements OnInit {

  @Input() detalleMascota?: any;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

}
