import { Component, inject, Injectable, resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DadosIntefaceAdmin } from './dadosIntefaceAdmin';


/*@Component({
  selector: 'app-dados',
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent{

  private urlAdmin = "http://localhost:8000/api/admin";

  dadosAdim = resource({
    loader: () => {
      return fetch(this.urlAdmin).then((res) => res.json() as Promise<DadosIntefaceAdmin[]>)
    }
  })

}*/

/*@Injectable({
  providedIn: 'root'
})

export class Dados {

  private http: HttpClient = inject(HttpClient);
  //private url = "http://localhost:8000/api/admin";


   getAdminDados(): Observable<DadosIntefaceAdmin> {
    const adminUrl: string = "http://localhost:8000/api/admin";
    return this.http.get<DadosIntefaceAdmin>(adminUrl);


  }


}*/

@Injectable({
  providedIn: 'root'
})

export class Dados {
  private urlAdmin = "http://localhost:8000/api/admin";
  dadosAdmin: DadosIntefaceAdmin[] = [];

  constructor(private http: HttpClient){}

  carregaDadosAdmin(): Observable<DadosIntefaceAdmin[]>{
    return this.http.get<DadosIntefaceAdmin[]>(this.urlAdmin).pipe(
      map(dados => {
        this.dadosAdmin = dados;
        return this.dadosAdmin;
      })
    );
  }

  getDadosAdmin(): DadosIntefaceAdmin[]{
    return this.dadosAdmin;
  }

}
