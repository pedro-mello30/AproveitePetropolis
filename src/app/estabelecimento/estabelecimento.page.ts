import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {EstabelecimentoService} from "./shared/estabelecimento.service";

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.page.html',
  styleUrls: ['./estabelecimento.page.scss'],
})
export class EstabelecimentoPage implements OnInit {

  selectedPage = 'informacoes';
  estabelecimento;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estabelecimentoService: EstabelecimentoService
  ) { }

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      const subscribe = this.estabelecimentoService.getByKey(key).subscribe((estabelecimento: any) => {
        subscribe.unsubscribe();
        this.estabelecimento = estabelecimento;
        this.estabelecimentoService.incrementVisit(estabelecimento);
      })
    }
  }

  segmentChanged(event : any){
    this.selectedPage = event.target.value;
  }


}
