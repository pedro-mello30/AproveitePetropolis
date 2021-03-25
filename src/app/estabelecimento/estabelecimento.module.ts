import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstabelecimentoPageRoutingModule } from './estabelecimento-routing.module';

import { EstabelecimentoPage } from './estabelecimento.page';
import {InformacoesContentsComponent} from "./informacoes-contents/informacoes-contents.component";
import {CupomContentsComponent} from "./cupom-contents/cupom-contents.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstabelecimentoPageRoutingModule
  ],
  declarations: [
    EstabelecimentoPage,
    InformacoesContentsComponent,
    CupomContentsComponent
  ]
})
export class EstabelecimentoPageModule {}
