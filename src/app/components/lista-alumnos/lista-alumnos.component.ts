import { Component, OnInit } from '@angular/core';
import {  Alumno } from "../../model/alumno.model";
import { AlumnoService } from "../../services/alumno.service";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  constructor(private service: AlumnoService) { }

  alumnos: Alumno[]=[];
  nombre: string='';
  ngOnInit(): void {
    this.service.getAll().subscribe((x)=>{
      this.alumnos=x;
    });
  }


}
