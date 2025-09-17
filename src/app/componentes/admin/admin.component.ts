
import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import * as CryptoJS from 'crypto-js';

import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';

import { DadosIntefaceAdmin } from '../servico/dados/dadosIntefaceAdmin';
import { RequisicoesService } from '../servico/dados/requisicoes.service';

@Component({
  selector: 'app-admin',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    OcorrenciasComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {


  dadosLoginApi: DadosIntefaceAdmin[] = [];
  senhaBancoDados: string = '';
  constructor(private dadosAdminApi: RequisicoesService){ }

ngOnInit(): void {
  ////////////////Dados de Login//////////////
  this.dadosAdminApi.carregaDadosAdmin().subscribe(
    (dados: any) => {
      this.dadosLoginApi = dados;
      this.senhaBancoDados = this.dadosLoginApi[0].senha;

    }
  );
  ///////////////////////////////////////////////

}

  senha: string = '';
  permissao: boolean = false;


  // Chave usada tanto para criptografar quanto para decritografar a senha
  key = "e5bbb3fd1536b390c011200732ffc3d765accda268b9203523677859674eb7a3f2cd1fd6949b7f640160b3ecd29e072666afb31386ae217ab2bbf2c75a837ac6";

  //Função para decritografar a senha
  public decrypt(passwordToDecrypt: string) {
   return CryptoJS.AES.decrypt(passwordToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
}

recebePermissao(event: boolean){
  this.permissao = event;
}


// Keyboard INTERACTION
x = document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // Observe: key - 'Enter', code - 'Enter', keyCode - 13
  if (keyName === 'Enter') {
   this.btnEntrar();
  }
}, false);



  btnEntrar(){

    if(this.decrypt(this.senhaBancoDados) === this.senha){
    this.permissao = true;
  }
    this.senha='';

  }

}
