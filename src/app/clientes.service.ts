import { Injectable } from '@angular/core';
import { Gestores } from './gestores/gestores';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  cadastrar(gestores:Gestores) : Observable<Gestores> {

    return this.http.post<Gestores>('http://localhost:8080/api/cadastro/gestor', gestores)

  }

  getGestores() : Observable<Gestores[]>{
    return this.http.get<Gestores[]>('http://localhost:8080/api/cadastro/gestor');
  }
}
