import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SubcategoriasService} from "./shared/subcategorias.service";
import {EstabelecimentoService} from "../estabelecimento/shared/estabelecimento.service";
import {CategoriasService} from "../categoria/shared/categorias.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.page.html',
  styleUrls: ['./subcategoria.page.scss'],
})
export class SubcategoriaPage implements OnInit {

  public categoria;
  public subcategorias: Observable<any[]>;
  public estabelecimentos: Observable<any[]>;


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
