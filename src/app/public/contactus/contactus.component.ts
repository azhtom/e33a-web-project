import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  constructor(private fb: FormBuilder) {}

  contactusForm = this.fb.group({
    persona: this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required]
    }),
    email: ['', [Validators.required, Validators.email]],
    comentarios: ['', Validators.required]
  });

  __onsubmit() {
    if(this.contactusForm.valid) {
      console.log(this.contactusForm.value);
    } else {
      alert("Formulario no valido");
    }    
  }
}
