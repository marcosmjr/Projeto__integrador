
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { MatButtonModule } from '@angular/material/button';

import { Contato } from './contato';
import { Validacao } from './validação';
import { NgxMaskDirective } from 'ngx-mask';
import { TermosPrivacidadeComponent } from './privacidade/termos-privacidade/termos-privacidade.component';


//import { RequisicaoService } from './requisicao.service';
import { RequisicoesService } from '../servico/dados/requisicoes.service';
import { DadosClienteInterface } from '../servico/dados/dadosClienteInterface';

interface UF {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pagina-contato',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    TextareaModule,
    MatButtonModule,
    MatCheckbox,
    NgxMaskDirective,
  ],
  templateUrl: './pagina-contato.component.html',
  styleUrl: './pagina-contato.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaContatoComponent {

  contato = new Contato();
  valida: Validacao = new Validacao;
  temosPrivacidade: TermosPrivacidadeComponent = new TermosPrivacidadeComponent;

  nome_empresa_estado: boolean = true;

  private termosPrivacidade: boolean = false;

  dadosClienteInterface: DadosClienteInterface[] = [];

  servico: string = "";
  preferencia: string = "";

  resposta = {
    error: false,
    success: false,
    message: ""
  };

  constructor(private requisicoesService:RequisicoesService){}

  // private ckbServicoPreenchido: boolean =false;
  // private ckbPreferenciaPreenchido: boolean =false;


  /**
   * Lista de valores para o seletor de estado.
   */
  estados: UF[] = [
    {value: 'SP', viewValue: 'SP'},
    {value: 'AC', viewValue: 'AC'},
    {value: 'AL', viewValue: 'AL'},
    {value: 'AP', viewValue: 'AP'},
    {value: 'AM', viewValue: 'AM'},
    {value: 'BA', viewValue: 'BA'},
    {value: 'CE', viewValue: 'CE'},
    {value: 'DF', viewValue: 'DF'},
    {value: 'ES', viewValue: 'ES'},
    {value: 'GO', viewValue: 'GO'},
    {value: 'MA', viewValue: 'MA'},
    {value: 'MT', viewValue: 'MT'},
    {value: 'MS', viewValue: 'MS'},
    {value: 'MG', viewValue: 'MG'},
    {value: 'PA', viewValue: 'PA'},
    {value: 'PB', viewValue: 'PB'},
    {value: 'PR', viewValue: 'PR'},
    {value: 'PE', viewValue: 'PE'},
    {value: 'PI', viewValue: 'PI'},
    {value: 'RJ', viewValue: 'RJ'},
    {value: 'RN', viewValue: 'RN'},
    {value: 'RS', viewValue: 'RS'},
    {value: 'RO', viewValue: 'RO'},
    {value: 'RR', viewValue: 'RR'},
    {value: 'SC', viewValue: 'SC'},
    {value: 'SE', viewValue: 'SE'},
    {value: 'TO', viewValue: 'TO'},
  ];

  /*
  * Se o checkBox Usar o mesmo número para WhatsApp? for verdadeiro,
  * copia o número do telefone da classe contato para o campo whatsApp
  * da classe contados que é substituído automaticamente no formulário
  */
   ckbUsarMesmoNumero(evento: boolean) {
    if(evento == true){
      this.contato.whatsApp = this.contato.telefone;
    }else {
      this.contato.whatsApp = '';
    }
   }


  /**
   * Se checkBox dos termos privacidade é marcado
   * a variável termosPrivacidade se torna verdadeira (true)
   */
  ckbTermosPrivacidade(evento: boolean){
    this.termosPrivacidade = evento;

  }
   /**
    * Se o checkBox "É pessoa jurídica?" é marcado,
    * habilita o campo Nome da Empresa e limpa o campo
    */
   ckbPessoaJuridica(evento: boolean){
     if(evento == true){
       this.nome_empresa_estado = false;
       this.contato.nomeEmpresa = '';

     } else {
       this.nome_empresa_estado = true;
       this.contato.nomeEmpresa = 'N/A';

     }
   }



/**
 * Executa as validações e envia o formulário
 */
  onSubmit(){

    // /**
    //  * Verifica se os termos de privacidade foram aceitos
    //  */
    //   if (this.termosPrivacidade == false){
    //     alert("Para enviar a mensagem é necessário ler e concordar com os termos de privacidade")
    //     return;
    //    }


    // /**
    //  * Verifica se algum assunto foi escolhido
    //  */
    // if (!this.contato.instalacao && !this.contato.manutencao && !this.contato.compra && !this.contato.outros){
    //     alert("Escolha um assunto");
    //     return;
    // }


    // /**
    //  * Verifica se os campo nome e sobrenome estão vazios, neste caso
    //  * emite um alerta e para a execução do envio do formulário
    //  */
    // if(this.contato.nome == '' || this.contato.sobrenome == ''){
    //   alert("O campo nome e sobrenome não devem estar vazio")
    //   return;
    // }

    // /**
    //  * Chama a validação do email se ele não estiver vazio
    //  */
    // if(!(this.valida.validaEmail(this.contato.email)) && this.contato.email != ''){
    //   alert('Digite um e-mail valido');
    //   return;
    // }

    // /**
    //  * Chama a validação do número de telefone
    //  */
    // if(!(this.valida.validaTelefone(this.contato.telefone)) || this.contato.telefone == ''){
    //   alert('Verifique se número do telefone está correto');
    // }

    // /**
    //  * Chama a validação do número de WhatsApp se ele não estiver vazio
    //  */
    //  if(!(this.valida.validaTelefone(this.contato.whatsApp)) && this.contato.whatsApp != ''){
    //     alert('Verifique se número do WhatsApp está correto');
    //     return;
    //   }

    /**
     * Envia os dados para o serviço de requisições enviar para a API salvar
     * os dados do cliente no banco de dados
     */


    if(this.contato.instalacao && !this.contato.manutencao && !this.contato.compra && !this.contato.outros){
      this.servico = "i"
    }else if(!this.contato.instalacao && this.contato.manutencao && !this.contato.compra && !this.contato.outros){
      this.servico = "m"
    }else if(!this.contato.instalacao && !this.contato.manutencao && this.contato.compra && !this.contato.outros){
      this.servico = "c"
    }else if(!this.contato.instalacao && !this.contato.manutencao && !this.contato.compra && this.contato.outros){
      this.servico = "o"
    }else if(this.contato.instalacao && this.contato.manutencao && !this.contato.compra && !this.contato.outros){
      this.servico = "im"
    }else if(this.contato.instalacao && !this.contato.manutencao && this.contato.compra && !this.contato.outros){
      this.servico = "ic"
    }else if(this.contato.instalacao && !this.contato.manutencao && !this.contato.compra && !this.contato.outros){
      this.servico = "io"
    }else if(!this.contato.instalacao && this.contato.manutencao && this.contato.compra && !this.contato.outros){
      this.servico = "mc"
    }else if(!this.contato.instalacao && this.contato.manutencao && !this.contato.compra && this.contato.outros){
      this.servico = "mo"
    }else if(!this.contato.instalacao && !this.contato.manutencao && this.contato.compra && this.contato.outros){
      this.servico = "co"
    }else if(this.contato.instalacao && this.contato.manutencao && this.contato.compra && !this.contato.outros){
      this.servico = "imc"
    }else if(this.contato.instalacao && this.contato.manutencao && !this.contato.compra && this.contato.outros){
      this.servico = "imo"
    }else if(!this.contato.instalacao && this.contato.manutencao && this.contato.compra && this.contato.outros){
      this.servico = "mco"
    }else if(this.contato.instalacao && !this.contato.manutencao && this.contato.compra && this.contato.outros){
      this.servico = "ico"
    }else if(this.contato.instalacao && this.contato.manutencao && this.contato.compra && this.contato.outros){
      this.servico = "imco"
    }




    if(this.contato.preferenciaEmail && !this.contato.preferenciaTelefone && !this.contato.preferenciaWhatsApp){
      this.preferencia = "e";
    } else if(!this.contato.preferenciaEmail && this.contato.preferenciaTelefone && !this.contato.preferenciaWhatsApp){
      this.preferencia = "t";
    } else if(!this.contato.preferenciaEmail && !this.contato.preferenciaTelefone && this.contato.preferenciaWhatsApp){
      this.preferencia = "w";
    } else if(this.contato.preferenciaEmail && this.contato.preferenciaTelefone && !this.contato.preferenciaWhatsApp){
      this.preferencia = "et";
    } else if(!this.contato.preferenciaEmail && this.contato.preferenciaTelefone && this.contato.preferenciaWhatsApp){
      this.preferencia = "tw";
    } else if(this.contato.preferenciaEmail && !this.contato.preferenciaTelefone && this.contato.preferenciaWhatsApp){
      this.preferencia = "ew";
    } else if(this.contato.preferenciaEmail && this.contato.preferenciaTelefone && this.contato.preferenciaWhatsApp){
      this.preferencia = "etw";
    } else


    this.dadosClienteInterface = [{
      nome: this.contato.nome,
      sobrenome: this.contato.sobrenome,
      telefone: this.contato.telefone,
      whatsApp: this.contato.whatsApp,
      email: this.contato.email,
      rua: this.contato.rua,
      numero: this.contato.numero,
      bairro: this.contato.bairro,
      cidade: this.contato.cidade,
      uf: this.contato.uf,
      servicos: this.servico,
      preferencia: this.preferencia,
      nomeEmpresa: this.contato.nomeEmpresa,
      mensagem: this.contato.mensagem,
      dataOcorrencia: "",
      dataAtendimento: "",
      ocorrenciaAtendida: ""
    }];

     this.requisicoesService.enviaDados(this.dadosClienteInterface).subscribe(
      {

      next: (res) => {

        const obj = res as {[key: string]: any}; // Cast explicito

        this.resposta['error'] = obj['error'];
        this.resposta['success'] = obj['success'];
        this.resposta['message'] = obj['message'];

      },

      error:(err) => {
        console.error('Erro ao enviar', err);
      }
     });

  }

     termosPrivacidade_()
     {
       this.temosPrivacidade.termosPrivacidade();
     }


}


