import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './vistas/lista-mascotas/lista-mascotas.component';
import { DetalleMascotaComponent } from './vistas/detalle-mascota/detalle-mascota.component';
import { FormularioMascotaComponent } from './vistas/formulario-mascota/formulario-mascota.component';

const routes: Routes = [

  {path: '', redirectTo: '/lista-mascotas', pathMatch: 'full'},
  {path:"lista-mascotas", component: ListaMascotasComponent}, 
  {path:"lista-mascotas/:especie", component: ListaMascotasComponent},
  {path:"formulario-mascota/:id", component: FormularioMascotaComponent},
  {path:"formulario-mascota", component: FormularioMascotaComponent},  
  {path: '**', redirectTo: '/lista-mascotas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
