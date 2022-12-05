import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../modelo/mascotas.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { MascotaInterfaz } from '../../modelo/mascota-interfaz';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css']
})
export class FormularioMascotaComponent implements OnInit {

  detalleMascota?: any;
  //Con esta variable controlamos cuando se trata de una nueva mascota o si vamos a modificar
  nuevaMascota: boolean = false;

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
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    //Mostramos datos del objeto que le pasamos al formulario. 
    if(this.route.snapshot.paramMap.get("id")){
      this.nuevaMascota = false;
      let id = String(this.route.snapshot.paramMap.get('id'));

      this.mascotaService.getDetalles(id).subscribe((resp) => {
        console.log(resp.payload.data());
        this.profileForm.setValue ({...resp.payload.data()        
          /*
          id: resp.payload['id'],
          nombre: resp.payload['nombre'],
          raza: resp.payload['raza'],
          especie: resp.payload['especie'],
          edad: resp.payload['edad'], 
          sexo: resp.payload['sexo'],
          nombrePropietario: resp.payload['nombrePropietario']   
          */
        })
      });
    }else{
      this.nuevaMascota = true;
      console.log(this.profileForm.value);
    }

  }

  onSubmit() {
    
    //Si nuevaMascota es true creamos un nuevo registro si no lo modificamos con el id de la ruta de la BBDD
    if(this.nuevaMascota){
      this.mascotaService.newMascota(this.profileForm.value).then(
        () => {alert("Nueva mascota Creada.");},
        (error) => {
          console.log(error);
        });
      }
      else{
      //Con esto capturamos el id de la ruta/el id de la mascota en firebase
      let id = String(this.route.snapshot.paramMap.get("id"));
      console.warn(this.profileForm.value);
      this.mascotaService.updateMascota(id, this.profileForm.value).then(
        () => {
          console.log("Mascota modificada.");
          alert("Mascota modificada.");
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  goBack(): void {
    this.location.back();
  }

}
