import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent {
  
  constructor(private fb:FormBuilder) {}

  projectForm = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    precio: [0, Validators.required]
  });

  __onsubmit() {
    if(this.projectForm.valid) {
      console.log(this.projectForm.value);
    } else {
      alert("Formulario no valido");
    }    
  }
}
