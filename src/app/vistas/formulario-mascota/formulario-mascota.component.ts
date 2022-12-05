import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../modelo/mascotas.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css']
})
export class FormularioMascotaComponent implements OnInit {

  detalleMascota?: any;

  profileForm = this.fb.group({
    id: [''],
    nombre: [''],
    raza: [''],
    especie: [''],
    edad: [''], 
    sexo: [''],
    nombrePropietario: ['']    
  });


  constructor(
    private mascotaService: MascotasService,
    private fb: FormBuilder,
    private location: Location
    ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.detalleMascota = this.profileForm.value;
    this.mascotaService.updateMascota(this.detalleMascota.id, this.detalleMascota);
    alert("Mascota Modificada.");
  }

  goBack(): void {
    this.location.back();
  }

}
