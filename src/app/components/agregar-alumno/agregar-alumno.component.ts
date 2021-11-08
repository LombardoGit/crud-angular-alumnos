import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/alumno.model';
import { AlumnoService } from "../../services/alumno.service";

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {

  alumno: Alumno = {
    nombre: '',
    apellido: '',
    curso: '',
    edad:0
  };
  submitted = false;
  constructor(
    private service: AlumnoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveAlumno(): void {
    const data = {
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
      curso: this.alumno.curso,
      edad: this.alumno.edad
    };

    this.service.create(data)
      .subscribe((x:any): void=>
        {
          this.submitted = true;
        },
        (err: any) => {
          console.log(err);
        });
        this.router.navigate(['/alumnos']);
  }

  newAlumno(): void {
    this.alumno = {
      nombre: '',
      apellido: '',
      curso: '',
      edad:0
    };
  }

}
