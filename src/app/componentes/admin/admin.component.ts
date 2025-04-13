
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import * as CryptoJS from 'crypto-js';

import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';

@Component({
  selector: 'app-admin',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    OcorrenciasComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  senha: string = '';
  criptografado: string = '';
  decriptografado: string = '';
  permissao: boolean = false;

  key = "e5bbb3fd1536b390c011200732ffc3d765accda268b9203523677859674eb7a3f2cd1fd6949b7f640160b3ecd29e072666afb31386ae217ab2bbf2c75a837ac6";


   public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, this.key).toString();
}

  public decrypt(passwordToDecrypt: string) {
   return CryptoJS.AES.decrypt(passwordToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
}

recebePermissao(event: boolean){
  this.permissao = event;
}

  btnEnviar(){
    this.criptografado = this.encrypt(this.senha);

    this.decriptografado =  this.decrypt(this.criptografado);

      this.permissao = true;

      console.log("Estado da permisão = "+this.permissao);
      console.log("Senha criptografada = " + this.criptografado);
      console.log("Senha decriptografada = " + this.decriptografado);

      this.senha='';

  }

}
