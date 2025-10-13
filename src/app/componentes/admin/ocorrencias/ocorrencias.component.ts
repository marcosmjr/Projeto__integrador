import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RequisicoesService } from '../../servico/dados/requisicoes.service';
import { Ocorrencias, RespostaAPI } from '../../servico/dados/dados-cliente-recebe-bdinterface';
import { ItensTabela } from './itens-tabela';



@Component({
  selector: 'app-ocorrencias',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,

],
  templateUrl: './ocorrencias.component.html',
  styleUrl: './ocorrencias.component.css'
})

export class OcorrenciasComponent  implements OnInit{

  ocorrencias: Ocorrencias[] = [];
  arrayItensTabela: ItensTabela[] = []


  constructor(private requisicoesService: RequisicoesService){}


  ngOnInit(): void {

    this.requisicoesService.recebeDados().subscribe({

      next: (dados) => {
        this.ocorrencias = dados.data;

        this.arrayTabela(dados);


      },

      error: (erro) => {
        console.error('Erro ao obter dados', erro);
      }

    });

  }

  @Output() enviaEstadoPermissão = new EventEmitter<boolean>();

  enviaPermissao(): void{
    this.enviaEstadoPermissão.emit(false);
  }

  btnVoltar() {
  this.enviaPermissao();
  }


  arrayTabela(dados: RespostaAPI){
      for(var i = 0; i < this.ocorrencias.length; i++){

        const itensTabela = new ItensTabela;


        let entradaServico: string = dados.data[i]['servico_ocorrencias'];
        let servico: string = "";
        let preferencia: string = "";

        if (entradaServico[0] == "i"){
          servico = "Instalação";
        } else if (entradaServico[0] == "m"){
          servico = "Manutenção";
        } else if (entradaServico[0] == "c"){
          servico = "Compra";
        } else if (entradaServico[0] == "o"){
          servico = "Outros"
        }

        if(entradaServico[0] != "m" && entradaServico[0] != "o" && entradaServico[1] == "m"){
          servico = servico + ", Manutenção"
        } else if (entradaServico[0] != "c" && entradaServico[0] != "o" && entradaServico[1] == "c"){
          servico = servico + ", Compra";
        } else if (entradaServico[0] != "o" && entradaServico[1] == "o"){
          servico = servico + ", Outros";
        }

        if(entradaServico[0] != "c" && entradaServico[1] != "c" && entradaServico[0] != "o" && entradaServico[2] == "c"){
          servico = servico + ", Compra"
        } else if (entradaServico[0] != "o" && entradaServico[1] != "o" && entradaServico[2] == "o"){
          servico = servico + ", Outros";
        }

        if (entradaServico[0] != "o" && entradaServico[1] != "o" && entradaServico[2] != "o" && entradaServico[3] == "o"){
          servico = servico + ", Outros";
        }



        itensTabela['id_ocorrencias'] = dados.data[i]['id_ocorrencias'];
        itensTabela['servico_ocorrencias'] = servico; //dados.data[i]['servico_ocorrencias'];
        itensTabela['mensagem_ocorrencias'] = dados.data[i]['mensagem_ocorrencias'];
        itensTabela['dataOcorrencia'] = dados.data[i]['data_ocorrencias'];
        itensTabela['dataAtendimento'] = dados.data[i]['data_atendimento'];

        if(dados.data[i]['nome_cliente_fisico'] != undefined ){
          itensTabela['nome_cliente'] = dados.data[i]['nome_cliente_fisico'];
          itensTabela['sobrenome_cliente'] = dados.data[i]['sobrenome_cliente_fisico'];
          itensTabela['telefone_cliente'] = dados.data[i]['telefone_cliente_fisico'];
          itensTabela['whatsapp_cliente'] = dados.data[i]['whatsapp_cliente_fisico'];
          itensTabela['e_mail_cliente'] = dados.data[i]['e_mail_cliente_fisico'];
          itensTabela['rua_cliente'] = dados.data[i]['rua_cliente_fisico'];
          itensTabela['numero_cliente'] = dados.data[i]['numero_cliente_fisico'];
          itensTabela['bairro_cliente'] = dados.data[i]['bairro_cliente_fisico'];
          itensTabela['cidade_cliente'] = dados.data[i]['cidade_cliente_fisico'];
          itensTabela['estado_cliente'] = dados.data[i]['estado_cliente_fisico'];
          itensTabela['preferencia_cliente'] = dados.data[i]['preferencia_cliente_fisico'];
          itensTabela['nome_empresa_cliente'] = dados.data[i]['nome_empresa_cliente_juridico'];
        }

        if(dados.data[i]['nome_cliente_juridico'] != undefined ){
          itensTabela['nome_cliente'] = dados.data[i]['nome_cliente_juridico'];
          itensTabela['sobrenome_cliente'] = dados.data[i]['sobrenome_cliente_juridico'];
          itensTabela['telefone_cliente'] = dados.data[i]['telefone_cliente_juridico'];
          itensTabela['whatsapp_cliente'] = dados.data[i]['whatsapp_cliente_juridico'];
          itensTabela['e_mail_cliente'] = dados.data[i]['e_mail_cliente_juridico'];
          itensTabela['rua_cliente'] = dados.data[i]['rua_cliente_juridico'];
          itensTabela['numero_cliente'] = dados.data[i]['numero_cliente_juridico'];
          itensTabela['bairro_cliente'] = dados.data[i]['bairro_cliente_juridico'];
          itensTabela['cidade_cliente'] = dados.data[i]['cidade_cliente_juridico'];
          itensTabela['estado_cliente'] = dados.data[i]['estado_cliente_juridico'];
          itensTabela['preferencia_cliente'] = dados.data[i]['preferencia_cliente_juridico'];
          itensTabela['nome_empresa_cliente'] = dados.data[i]['nome_empresa_cliente_juridico'];
        }

        this.arrayItensTabela[i] = itensTabela;

     }



  }



  displayedColumns: string[] = ['linha', 'dadosCliente', 'lixeira'];
  dataSource = new MatTableDataSource<ItensTabela>(this.arrayItensTabela);

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



