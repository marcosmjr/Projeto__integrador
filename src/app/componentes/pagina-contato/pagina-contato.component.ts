
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

  setNome: String = '';
  setSobrenome: String = '';
  setTelefone: String = '';
  setWhatsApp: String = '';
  setEmail: String = '';
  setRua: String = '';
  setNumero: String = '';
  setBairro: String = '';
  setCidade: String = '';
  setUF: String = '';

  setNomeEmpresa: String = 'N/A';
  setMensagem: String = '';

  setContato(){
    this.contato.setNome(this.setNome);
    this.contato.setSobrenome(this.setSobrenome);
    this.contato.setTelefone(this.setTelefone);
    this.contato.setWhatsApp(this.setWhatsApp);
    this.contato.setEmail(this.setEmail);
    this.contato.setRua(this.setRua);
    this.contato.setNumero(this.setNumero);
    this.contato.setBairro(this.setBairro);
    this.contato.setCidade(this.setCidade);
    this.contato.setUF(this.setUF);
    
    this.contato.setNomeEmpresa(this.setNomeEmpresa);
    this.contato.setMensagem(this.setMensagem);
  }

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
      this.contato.setWhatsApp(this.setTelefone);
      this.setWhatsApp = this.setTelefone
    }else {
      this.contato.setWhatsApp('');
      this.setWhatsApp = '';
    }
  }

  ckbServico(): boolean{
    if(this.instalacao == true && this.manutencao == false && this.outros == false){
      this.contato.setServico('i');
    }else if (this.instalacao == false && this.manutencao == true && this.outros == false) {
      this.contato.setServico('m');
    } else if (this.instalacao == false && this.manutencao == false && this.outros == true) {
      this.contato.setServico('o');
    } else if (this.instalacao == true && this.manutencao == true && this.outros == false) {
      this.contato.setServico('im');
    } else if (this.instalacao == true && this.manutencao == false && this.outros == true) {
      this.contato.setServico('io');
    } else if (this.instalacao == false && this.manutencao == true && this.outros == true) {
      this.contato.setServico('mo');
    } else if (this.instalacao == true && this.manutencao == true && this.outros == true) {
      this.contato.setServico('imo');
    } else if (this.instalacao == false && this.manutencao == false && this.outros == false) {
      this.contato.setServico('');
      alert("Escolha um assunto no campo Serviços");
      return false;
    }
    return true
  }

  cbkPreferencia(): boolean{
    if(this.telefone == true && this.whatsApp == false && this.e_mail == false){
      this.contato.setPreferencia('t');
    }else if (this.telefone == false && this.whatsApp == true && this.e_mail == false) {
      this.contato.setPreferencia('w');
    } else if (this.telefone == false && this.whatsApp == false && this.e_mail == true) {
      this.contato.setPreferencia('e');
    } else if (this.telefone == true && this.whatsApp == true && this.e_mail == false) {
      this.contato.setPreferencia('tw');
    } else if (this.telefone == true && this.whatsApp == false && this.e_mail == true) {
      this.contato.setPreferencia('te');
    } else if (this.telefone == false && this.whatsApp == true && this.e_mail == true) {
      this.contato.setPreferencia('we');
    } else if (this.telefone == true && this.whatsApp == true && this.e_mail == true) {
      this.contato.setPreferencia('twe');
    } else if (this.telefone == false && this.whatsApp == false && this.e_mail == false) {
      this.contato.setPreferencia('');
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
      this.setNomeEmpresa = '';

    } else {
      this.nome_empresa_estado = true;
      this.setNomeEmpresa = 'N/A';

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
      
      this.setContato();
    }


}
