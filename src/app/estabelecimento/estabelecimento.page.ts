import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.page.html',
  styleUrls: ['./estabelecimento.page.scss'],
})
export class EstabelecimentoPage implements OnInit {

  selectedPage = 'informacoes';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event : any){
    this.selectedPage = event.target.value;
  }
}
