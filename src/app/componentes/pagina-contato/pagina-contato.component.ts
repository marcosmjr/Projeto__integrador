
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TextareaModule } from 'primeng/textarea';
import {MatButtonModule} from '@angular/material/button';

interface Estados {
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
    MatButtonModule
  ],
  templateUrl: './pagina-contato.component.html',
  styleUrl: './pagina-contato.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaContatoComponent {

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


}
