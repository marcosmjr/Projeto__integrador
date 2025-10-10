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

        itensTabela['id_ocorrencias'] = dados.data[i]['id_ocorrencias'];
        itensTabela['servico_ocorrencias'] = dados.data[i]['servico_ocorrencias'];
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

        console.log(this.arrayItensTabela[i].id_ocorrencias)
        console.log(this.arrayItensTabela[i].nome_cliente)
        console.log(this.arrayItensTabela[i].telefone_cliente)
        console.log(this.arrayItensTabela[i].nome_empresa_cliente)

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





//const ELEMENT_DATA: ItensTabela[] = this.arrayItensTabela;



/*= [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];*/

