import { Component, OnInit } from '@angular/core';
import {ToastService} from "../core/services/toast.service";
import {CategoriasService} from "../categoria/shared/categorias.service";
import {Observable} from "rxjs";
import {EstabelecimentoService} from "../estabelecimento/shared/estabelecimento.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  // public estabelecimentos;
  categorias: Observable<any[]>;
  estabelecimentos: Observable<any[]>;

  constructor(
    private categoriasService: CategoriasService,
    private estabelecimentosService: EstabelecimentoService,
    private toast: ToastService
  ) {
    // this.estabelecimentos = Array(5).fill(4);

  }

  ngOnInit() {
    this.categorias = this.categoriasService.getAll();
    this.estabelecimentos = this.estabelecimentosService.getAll();
  }

}
