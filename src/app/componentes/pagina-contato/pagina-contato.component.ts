
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { MatButtonModule } from '@angular/material/button';

import { Contato } from './contato';


interface Estados {
  value: string;
  viewValue: string;
}

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
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
  ],
  templateUrl: './pagina-contato.component.html',
  styleUrl: './pagina-contato.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaContatoComponent {

  contato: Contato = new Contato;
  
  constructor(){

  }
  
  nome_empresa_estado: boolean = true;

  value: string = '';
  estados: Estados[] = [
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

  nome(evento: any){
    this.contato.nome = evento.target.value;
  }

  sobrenome(evento: any){
    this.contato.sobrenome = evento.target.value;
    alert(this.contato.sobrenome)
  }

  pessoaJuridica(evento: boolean):void {
    if(this.nome_empresa_estado == true){
      this.nome_empresa_estado = false;
    } else {
      this.nome_empresa_estado = true;
    }
    console.log(this.contato.nome);
  };

}
