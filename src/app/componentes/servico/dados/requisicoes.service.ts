import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DadosIntefaceAdmin } from './dadosIntefaceAdmin';
import { DadosClienteInterface } from './dadosClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  constructor(private http: HttpClient){}

  /**
   * Requisição de dados do administrador
   */
  private urlAdmin = "http://localhost/PHP/projetoIntegrador/apiPHP/admin/login";

    login(dadosAdmin: DadosIntefaceAdmin[]): Observable<DadosIntefaceAdmin[]>{
      return this.http.post<DadosIntefaceAdmin[]>(this.urlAdmin, dadosAdmin[0]);
  }


  /**
   * Envia dados para serem salvos pela api
   */
    apiPostUrl = 'http://localhost/PHP/projetoIntegrador/apiPHP/cliente/cadastro/contato';

    enviaDados(dadosCliente: DadosClienteInterface[] ): Observable<DadosClienteInterface[]>{
      // console.log(dadosCliente[0].preferencia_cliente + " --- " , dadosCliente[0].servico_ocorrencias + " --- " + dadosCliente[0].nome_empresa_cliente);
      return this.http.post<DadosClienteInterface[]>(this.apiPostUrl, dadosCliente[0]);
    }


    /**
     * Recebe dados do banco de dados
     */

    // apiGetUrl = 'http://localhost:8000/api/ler';

    // private dadosClientes: DadosClienteInterface[] = [];

    // recebeDados(): Observable<DadosClienteInterface[]>{
    //   return this.http.get<DadosClienteInterface[]>(this.apiGetUrl).pipe(
    //     map(dados => {
    //         this.dadosClientes = dados;
    //         return this.dadosClientes;
    //       },

    //       (erro: any)=>{
    //       console.error('Erro ao carregar dados da API:', erro);
    //       }

    //     ),
    //   );

    // }

    //   getDadosAdmin(): DadosIntefaceAdmin[]{
    //       return this.dadosAdmin;
    //   }

    //   getReceberDados(): DadosClienteInterface[]{
    //     return this.dadosClientes;
    //   }
}
