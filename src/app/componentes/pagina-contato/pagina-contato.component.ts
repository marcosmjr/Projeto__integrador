
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-pagina-contato',
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    FormsModule,
    MatCheckboxModule
  ],
  templateUrl: './pagina-contato.component.html',
  styleUrl: './pagina-contato.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaContatoComponent {

  

}
