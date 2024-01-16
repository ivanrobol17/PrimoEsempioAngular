import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrl: './elenco.component.css'
})
export class ElencoComponent {
  @Input() titolo: string | undefined
  @Input() test: string | undefined
  @Input() valCount: number | undefined
  @Output() eventoContatore=new EventEmitter<number>();
  contatore : number = 0; 
  inc(){ // incremento di una variabile con un button
    if (this.valCount!==undefined && this.valCount !== this.contatore) {
      this.contatore =this.valCount;
    }
    this.contatore++;
    this.eventoContatore.emit(this.contatore)
  }
  dec(){ // decremento di una variabile con un button
    if (this.valCount!==undefined && this.valCount !== this.contatore) {
      this.contatore =this.valCount;
    }
    this.contatore--;
    this.eventoContatore.emit(this.contatore)
  }
}

