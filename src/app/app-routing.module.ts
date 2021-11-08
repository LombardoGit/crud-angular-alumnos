import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from "./components/agregar-alumno/agregar-alumno.component";
import { DetalleAlumnoComponent } from "./components/detalle-alumno/detalle-alumno.component";
import { ListaAlumnosComponent  } from "./components/lista-alumnos/lista-alumnos.component";

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: ListaAlumnosComponent },
  { path: 'alumnos/:id', component: DetalleAlumnoComponent },
  { path: 'agregar', component: AgregarAlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
