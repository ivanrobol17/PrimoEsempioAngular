import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primoEsempio';
  contatoreGlobale: number=0;
  visibile: boolean = true;
  testo_button: string = 'Nascondi'
  eventoContatore(valore: number){
    this.contatoreGlobale = valore
  }
  mod_visibile(){
    if (this.visibile==true){
      this.testo_button = 'Mostra'
      this.visibile=false
    }else{
      this.testo_button = 'Nascondi'
      this.visibile=true
    }
  }

}
