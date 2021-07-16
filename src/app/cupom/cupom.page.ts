import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CupomService} from "./shared/cupom.service";
import {UsuarioAuthService} from "../login/shared/usuario-auth.service";
// import { crypto } from 'crypto';

@Component({
  selector: 'app-cupom',
  templateUrl: './cupom.page.html',
  styleUrls: ['./cupom.page.scss'],
})
export class CupomPage implements OnInit {

  cupom;
  token;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cuponsService: CupomService,
    private usuarioAuthService: UsuarioAuthService
  ) { }

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('key');
    if(key){
      const subscribe = this.cuponsService.getByKey(key).subscribe((cupom: any) => {
        subscribe.unsubscribe();
        this.cupom = cupom;
      })
    }
  }

  generateCupom(estabelecimentoKey: string){
    const user = this.usuarioAuthService.getUser();
    this.token = this.cuponsService.generateCupom(estabelecimentoKey, user.email);
  }

}
