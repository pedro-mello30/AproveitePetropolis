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

  uploadImg(event: any){
    if (event.target.files.length) {
      this.usuarioAuthService.uploadImg(event.target.files[0])
      const reader = new FileReader();
      reader.onload = () => {
        this.usuario.photoUrl = reader.result.toString();
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  logout(){
    this.usuarioAuthService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
