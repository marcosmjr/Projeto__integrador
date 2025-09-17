
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, NgForm } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { MatButtonModule } from '@angular/material/button';

import { Contato } from './contato';
import { Validacao } from './validação';
import { NgxMaskDirective, /*NgxMaskPipe*/ } from 'ngx-mask';
import { TermosPrivacidadeComponent } from './privacidade/termos-privacidade/termos-privacidade.component';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';


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
    //NgxMaskPipe
    JsonPipe,
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

    /**
     * Verifica se os termos de privacidade foram aceitos
     */
      // if (this.termosPrivacidade == false){
      //   alert("Para enviar a mensagem é necessário ler e concordar com os termos de privacidade")
      //   return;
      //  }


    /**
     * Verifica se algum assunto foi escolhido
     */
    // if (!this.contato.instalacao && !this.contato.manutencao && !this.contato.compra && !this.contato.outros){
    //     alert("Escolha um assunto");
    //     return;
    // }


    /**
     * Verifica se os campo nome e sobrenome estão vazios, neste caso
     * emite um alerta e para a execução do envio do formulário
     */
    //if(this.contato.nome == '' || this.contato.sobrenome == ''){
      //alert("O campo nome e sobrenome não devem estar vazio")
      //return;
    //}

    /**
     * Chama a validação do email se ele não estiver vazio
     */
    // if(!(this.valida.validaEmail(this.contato.email)) && this.contato.email != ''){
    //   alert('Digite um e-mail valido');
    //   return;
    // }

    /**
     * Chama a validação do número de telefone
     */
    // if(!(this.valida.validaTelefone(this.contato.telefone)) || this.contato.telefone == ''){
    //   alert('Verifique se número do telefone está correto');
    // }

    /**
     * Chama a validação do número de WhatsApp se ele não estiver vazio
     */
    //  if(!(this.valida.validaTelefone(this.contato.whatsApp)) && this.contato.whatsApp != ''){
    //     alert('Verifique se número do WhatsApp está correto');
    //     return;
    //   }

     console.log(this.contato);

  }

     termosPrivacidade_()
     {
       this.temosPrivacidade.termosPrivacidade();
     }


}


