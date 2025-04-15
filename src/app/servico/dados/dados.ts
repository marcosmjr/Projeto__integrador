import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DadosIntefaceAdmin } from './dadosIntefaceAdmin';
import { AdminDados } from '../../componentes/admin/adminDados';


/*@Component({
  selector: 'app-dados',
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent{

  constructor(private httpCliente: HttpClient) {}

  adminDados: AdminDados = new AdminDados

  getDados () {
    return this.httpCliente.get("http://localhost:8000/api/admin");
  }

}*/

@Injectable({
  providedIn: 'root'
})

export class Dados {

  private http: HttpClient = inject(HttpClient);
  //private url = "http://localhost:8000/api/admin";


   getAdminDados(): Observable<DadosIntefaceAdmin> {
    const adminUrl: string = "http://localhost:8000/api/admin";
    return this.http.get<DadosIntefaceAdmin>(adminUrl);


  }


}
