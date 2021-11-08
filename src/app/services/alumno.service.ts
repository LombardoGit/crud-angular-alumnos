import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from "../model/alumno.model";



const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(baseUrl+'/alumnos');
  }

  get(id: any): any {
    return this.http.get(`${baseUrl+'/alumno'}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'/alumno', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl+'/alumno'}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+'/alumno'}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

 

}
