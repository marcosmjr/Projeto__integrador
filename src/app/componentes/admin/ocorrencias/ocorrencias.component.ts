import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-ocorrencias',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './ocorrencias.component.html',
  styleUrl: './ocorrencias.component.css'
})
export class OcorrenciasComponent {

@Output() enviaEstadoPermissão = new EventEmitter<boolean>();

enviaPermissao(): void{
  this.enviaEstadoPermissão.emit(false);
}

btnVoltar() {
this.enviaPermissao();
}

}
