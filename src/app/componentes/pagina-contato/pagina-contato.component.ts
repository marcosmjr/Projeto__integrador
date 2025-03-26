
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { MatButtonModule } from '@angular/material/button';

import { Contato } from './contato';


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
    MatCheckbox
  ],
  templateUrl: './pagina-contato.component.html',
  styleUrl: './pagina-contato.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaContatoComponent {

  contato: Contato = new Contato;
  nome_empresa_estado: boolean = true;

  private instalacao: boolean = false;
  private manutencao: boolean = false;
  private outros: boolean = false;

  private telefone: boolean = false;
  private whatsApp: boolean = false;
  private e_mail: boolean = false;

  private termoPrivacidade:boolean = false;

  private ckbServicoPreenchido: boolean =false;
  private ckbPreferenciaPreenchido: boolean =false;

  

  value: string = '';
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

  ckbInstalacao(evento: boolean){
      this.instalacao = evento;
  }

  ckbManutencao(evento: boolean){
    this.manutencao = evento;
  }

  ckbOutros(evento: boolean){
    this.outros = evento;
  }


  ckbTelefone(evento: boolean){
    this.telefone = evento;
  }

  ckbWhatsApp(evento: boolean){
  this.whatsApp = evento;
  }

  ckbE_Mail(evento: boolean){
  this.e_mail = evento;
  }

  ckbUsarMesmoNumero(evento: boolean) {
    if(evento == true){
      this.contato.whatsApp = this.contato.telefone;
    }else {
      this.contato.whatsApp = '';
    }
  }

  ckbServico(): boolean{
    if(this.instalacao == true && this.manutencao == false && this.outros == false){
      this.contato.servico = 'i';
    }else if (this.instalacao == false && this.manutencao == true && this.outros == false) {
      this.contato.servico = 'm';
    } else if (this.instalacao == false && this.manutencao == false && this.outros == true) {
      this.contato.servico = 'o';
    } else if (this.instalacao == true && this.manutencao == true && this.outros == false) {
      this.contato.servico = 'im';
    } else if (this.instalacao == true && this.manutencao == false && this.outros == true) {
      this.contato.servico = 'io';
    } else if (this.instalacao == false && this.manutencao == true && this.outros == true) {
      this.contato.servico = 'mo';
    } else if (this.instalacao == true && this.manutencao == true && this.outros == true) {
      this.contato.servico = 'imo';
    } else if (this.instalacao == false && this.manutencao == false && this.outros == false) {
      this.contato.servico = '';
      alert("Escolher um assunto no campo Serviços");
      return false;
    }
    return true
  }

  cbkPreferencia(): boolean{
    if(this.telefone == true && this.whatsApp == false && this.e_mail == false){
      this.contato.preferencia = 't';
    }else if (this.telefone == false && this.whatsApp == true && this.e_mail == false) {
      this.contato.preferencia = 'w';
    } else if (this.telefone == false && this.whatsApp == false && this.e_mail == true) {
      this.contato.preferencia = 'e';
    } else if (this.telefone == true && this.whatsApp == true && this.e_mail == false) {
      this.contato.preferencia = 'tw';
    } else if (this.telefone == true && this.whatsApp == false && this.e_mail == true) {
      this.contato.preferencia = 'te';
    } else if (this.telefone == false && this.whatsApp == true && this.e_mail == true) {
      this.contato.preferencia = 'we';
    } else if (this.telefone == true && this.whatsApp == true && this.e_mail == true) {
      this.contato.preferencia = 'twe';
    } else if (this.telefone == false && this.whatsApp == false && this.e_mail == false) {
      this.contato.preferencia = '';
      alert("É necessário escolher um meio de comunicação preferido");
      return false;
    }
    return true;
  }

  ckbTermoPrivacidade(evento: boolean){
    this.termoPrivacidade = evento;
    
  }

  ckbPessoaJuridica(evento: boolean){
    if(evento == true){
      this.nome_empresa_estado = false;
      this.contato.nomeEmpresa = '';
    } else {
      this.nome_empresa_estado = true;
      this.contato.nomeEmpresa = 'N/A';

    }
  }

    btnEnviar(){
      if (this.termoPrivacidade == false){
        alert("Para enviar a mensagem é necessario ler e concordar com os termos de privacidade")
        return;
      }
      this.ckbServicoPreenchido = this.ckbServico()
      this.ckbPreferenciaPreenchido = this.cbkPreferencia();

      if (this.ckbServicoPreenchido == false || this.ckbPreferenciaPreenchido == false){
          return;
      }

    
      console.log(this.contato.nome);
      console.log(this.contato.sobrenome);
      console.log(this.contato.telefone);
      console.log(this.contato.whatsApp);
      console.log(this.contato.e_mail);
      console.log(this.contato.nomeEmpresa);
      console.log(this.contato.rua);
      console.log(this.contato.numero);
      console.log(this.contato.bairro);
      console.log(this.contato.cidade);
      console.log(this.contato.uf);
      console.log(this.instalacao);
      console.log(this.manutencao);
      console.log(this.outros);
      console.log(this.contato.servico);
      console.log(this.contato.preferencia);
      console.log(this.contato.mensagem);


    }



}
