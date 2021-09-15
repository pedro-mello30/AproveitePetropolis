import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriasService} from "./shared/categorias.service";
import {SubcategoriasService} from "../subcategoria/shared/subcategorias.service";
import {EstabelecimentoService} from "../estabelecimento/shared/estabelecimento.service";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  public categoria;
  public subcategorias;
  public estabelecimentos;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriasService,
    private subcategoriaService: SubcategoriasService,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      const subscri = this.categoriaService.getByKey(key).subscribe((categoria: any) => {
        subscri.unsubscribe();
        this.categoria = categoria;
      })


      const subscribe = this.subcategoriaService.getByCategoriaKey(key).subscribe((subcategorias: any) => {
        subscribe.unsubscribe();
        this.subcategorias = subcategorias;
        console.log(this.subcategorias);

      })


      const sub = this.estabelecimentoService.getByField('categoriaKey', key).subscribe((estabelecimentos: any) => {
        sub.unsubscribe();
        this.estabelecimentos = estabelecimentos;
      })
    }
  }

}
