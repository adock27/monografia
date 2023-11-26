import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { card } from 'src/app/components/components';

@Component({
  templateUrl: './tailwind.component.html',
  styleUrls: ['./tailwind.component.css']
})
export class TailwindComponent {

  cardGeneratorField = new FormControl(100);
  card: any;
  counter: any;
  counterMax: any = 1000;
  seconds: any = 0;
  msg: any;
  constructor() { }

  ngOnInit() {
    this.card = card
    this.counter = 0
    this.msg = 'Iniciar'
  }

  
  initTest() {
    if (this.counter === 0) {
      this.counterMax = this.cardGeneratorField.value;
      const tiempoInicio = performance.now();

      const finalizarProceso = () => {
        // Guardar el tiempo de finalización del proceso
        const tiempoFin = performance.now();

        // Calcular la diferencia en milisegundos
        const tiempoTranscurrido = tiempoFin - tiempoInicio;

        // Convertir milisegundos a segundos
        const segundosTranscurridos = tiempoTranscurrido / 1000;

        this.seconds = segundosTranscurridos;

        this.msg = 'Test de nuevo';
      };

      const executeNext = (index: number) => {
        if (index < this.counterMax) {
          setTimeout(() => {
            this.counter++;
            if (this.counter === this.counterMax) {
              finalizarProceso();
            } else {
              executeNext(index + 1);
            }
          }, 0);
        }
      };

      executeNext(0);
    } else {
      this.counter = 0;
    }
  }

}
