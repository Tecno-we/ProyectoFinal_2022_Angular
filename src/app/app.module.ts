import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ElectronicaComponent } from './categorias/electronica/electronica.component';
import { MascotasComponent } from './categorias/mascotas/mascotas.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarritoComponent } from './carrito/carrito.component';
import { JugueteriaComponent } from './categorias/jugueteria/jugueteria.component';
import { HogarComponent } from './categorias/hogar/hogar.component';
import { FarmaciaComponent } from './categorias/farmacia/farmacia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angularx-qrcode';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    PreguntasComponent,
    MenuComponent,
    CategoriasComponent,
    ElectronicaComponent,
    MascotasComponent,
    CarritoComponent,
    JugueteriaComponent,
    HogarComponent,
    FarmaciaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    QRCodeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
