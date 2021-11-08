import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgregarAlumnoComponent,
    DetalleAlumnoComponent,
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
