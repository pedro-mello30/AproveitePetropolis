import { Component, OnInit } from '@angular/core';
import {UsuarioAuthService} from "../../login/shared/usuario-auth.service";
import {Router} from "@angular/router";
import {ToastService} from "../../core/services/toast.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  form: FormGroup;
  usuario;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioAuthService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getDadosUsuario();
    this.criarFormulario();
    this.carregarDados();
  }

  carregarDados(){
    const userSub = this.usuarioService.getDadosUsuario().subscribe((dadosUser: any) => {
      userSub.unsubscribe();

      this.form.setValue({
        nome: dadosUser.nome,
        telefone: dadosUser.telefone
      })
    })
  }

  criarFormulario() {
    this.form = this.formBuilder.group({
      nome: [''],
      telefone: [''],
    });
  }

  onSubmit(){
    if(this.form.valid){
      this.usuarioService.updateProfile(this.form.value);
      this.toast.showSuccess("Perfil atualizado com sucesso.");
      this.router.navigate(['/tabs/perfil'])
    }
  }
}
