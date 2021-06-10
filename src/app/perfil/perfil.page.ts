import { Component, OnInit } from '@angular/core';
import {UsuarioAuthService} from '../login/shared/usuario-auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario;

  constructor(
    private usuarioAuthService: UsuarioAuthService,
    private router: Router
  )
  { }

  ngOnInit() {
    this.usuario = this.usuarioAuthService.getUser();
    console.log(this.usuario);
  }

  logout(){
    this.usuarioAuthService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
}
