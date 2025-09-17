import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DadosIntefaceAdmin } from './dadosIntefaceAdmin';
import { Contato } from '../../pagina-contato/contato';
import { DadosClienteInterface } from './dadosClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  constructor(private http: HttpClient){}

  /**
   * Requisição de dados do administrador
   */
  private urlAdmin = "http://localhost:8000/api/admin";

  dadosAdmin: DadosIntefaceAdmin[] = [];

  carregaDadosAdmin(): Observable<DadosIntefaceAdmin[]>{
    return this.http.get<DadosIntefaceAdmin[]>(this.urlAdmin).pipe(
      map(dados => {
        this.dadosAdmin = dados;
        return this.dadosAdmin;
      },

        (erro: any)=>{
          console.error('Erro ao carregar dados da API:', erro);
        }

      ),
    );
  }

  getDadosAdmin(): DadosIntefaceAdmin[]{
    return this.dadosAdmin;
  }


  /**
   * Envia dados para serem salvos pela api
   */
    apiPostUrl = 'http://localhost:8000/api/cadastro';

    enviaDados(data: Contato): Observable<Contato>{
      return this.http.post<Contato>(this.apiPostUrl, data)
    }


    /**
     * Recebe dados do banco de dados
     */

    apiGetUrl = 'http://localhost:8000/api/cadastro';

    dadosClientes: DadosClienteInterface[] = [];

    recebeDados(): Observable<DadosClienteInterface[]>{
      return this.http.get<DadosClienteInterface[]>(this.apiGetUrl).pipe(
        map(dados => {
            this.dadosClientes = dados;
            return this.dadosClientes;
          },

          (erro: any)=>{
          console.error('Erro ao carregar dados da API:', erro);
          }

        ),
      );
    }
}
