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

  public subcategoria;
  public estabelecimentos: Observable<any[]>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subcategoriaService: SubcategoriasService,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      const subscri = this.subcategoriaService.getByKey(key).subscribe((subcategoria: any) => {
        subscri.unsubscribe();
        this.subcategoria = subcategoria;
      })

      const sub = this.estabelecimentoService.getByField('subcategoriaKey', key).subscribe((estabelecimentos: any) => {
        sub.unsubscribe();
        this.estabelecimentos = estabelecimentos;
      })
    }
  }

}
