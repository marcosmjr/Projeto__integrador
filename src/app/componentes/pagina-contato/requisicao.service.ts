import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from './contato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  apiUrl = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) { }

  criarItens(data: Contato): Observable<Contato>{
    return this._http.post<Contato>(this.apiUrl, data)
  }
}
