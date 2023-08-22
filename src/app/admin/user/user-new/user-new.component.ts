import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {

  constructor(private fb:FormBuilder) {}

  userForm = this.fb.group({
    dni: ['', Validators.required],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    perfil: ['', Validators.required]
  });

  __onsubmit() {
    if(this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      alert("Formulario no valido");
    }    
  }
}
