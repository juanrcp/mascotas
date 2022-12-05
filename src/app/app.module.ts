import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMascotasComponent } from './vistas/lista-mascotas/lista-mascotas.component';
import { DetalleMascotaComponent } from './vistas/detalle-mascota/detalle-mascota.component';
import { FormularioMascotaComponent } from './vistas/formulario-mascota/formulario-mascota.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    DetalleMascotaComponent,
    FormularioMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importacion necesaria para firebase con el entorno donde declaramos su variables
    AngularFireModule.initializeApp(environment.firebase),
    //Importacion necesaria para formularios
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
