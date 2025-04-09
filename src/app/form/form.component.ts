import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  onSubmit() {
    console.log('Форма отправлена!');
  }
}
