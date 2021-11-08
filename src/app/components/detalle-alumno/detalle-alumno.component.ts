import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/model/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  alumno: Alumno = {
    nombre: '',
    apellido: '',
    curso: '',
    edad: 0
  };
  message = '';

  constructor(
    private service: AlumnoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAlumno(this.route.snapshot.params.id);
  }

  getAlumno(id: string): void {
    this.service.get(id)
      .subscribe(
        (data: any) => {
          this.alumno = data;
        },
        (error: any) => {
          console.log(error);
        });
  }

  updateAlumno(): void {
    this.message = '';

    this.service.update(this.alumno.id, this.alumno)
      .subscribe(
        response => {
          this.message = response.message ? response.message : 'Este alumno fue actualizado correctamente!';
          this.router.navigate(['/alumnos']);
        },
        error => {
          console.log(error);
        });
  }

  deleteAlumno(): void {
    this.service.delete(this.alumno.id)
      .subscribe(
        response => {
          this.router.navigate(['/alumnos']);
        },
        error => {
          console.log(error);
        });
  }
}
