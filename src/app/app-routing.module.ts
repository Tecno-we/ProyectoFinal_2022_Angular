import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ElectronicaComponent } from './categorias/electronica/electronica.component';
import { MascotasComponent } from './categorias/mascotas/mascotas.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"contactos", component:ContactoComponent},
  {path:"preguntas", component:PreguntasComponent},
  {path:"menu", component:MenuComponent},
  {path:"categorias", component:CategoriasComponent},
  {path:"Electronica", component:ElectronicaComponent},
  {path:"Mascotas", component:MascotasComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
