import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  formulario!: FormGroup;
  jsonInput: any = ''; // Propiedad para almacenar el JSON

  jsonExample:any = {
    "nombre": {
      "type": "text",
      "value": "John Doe"
    },
    "correo": {
      "type": "email",
      "value": "john@example.com"
    },
    "edad": {
      "type": "number",
      "value": 25
    }
  }
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Inicialmente, el formulario estará vacío
    this.formulario = this.formBuilder.group({});
  }

  // Método para construir el formulario basado en el JSON
  construirFormularioDesdeJSON() {
    try {
      const jsonData = JSON.parse(this.jsonInput);

      // Inicializa un objeto que contendrá los controles del formulario
      const formControls:any = {};

      for (const key in jsonData) {
        formControls[key] = '';
      }

      this.formulario = this.formBuilder.group(formControls);
    } catch (error) {
      console.error('Error al analizar el JSON:', error);
    }
  }
  
}
