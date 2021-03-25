import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.page.html',
  styleUrls: ['./subcategoria.page.scss'],
})
export class SubcategoriaPage implements OnInit {

  public estabelecimentos;

  constructor() {

    this.estabelecimentos = Array(5).fill(4);
  }

  ngOnInit() {
  }

}
