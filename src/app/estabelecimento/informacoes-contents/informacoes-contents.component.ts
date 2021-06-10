import {Component, Input, OnInit} from '@angular/core';
import {EstabelecimentosImagensService} from "../shared/estabelecimentos-imagens.service";

@Component({
  selector: 'app-informacoes-contents',
  templateUrl: './informacoes-contents.component.html',
  styleUrls: ['./informacoes-contents.component.scss'],
})
export class InformacoesContentsComponent implements OnInit {

  @Input() estabelecimento;
  imagens;

  constructor(
    private estabelecimentosImagensService: EstabelecimentosImagensService
  ) { }

  ngOnInit() {
    const subscribe = this.estabelecimentosImagensService.getByField('estabelecimentoKey', this.estabelecimento.key).subscribe((imagens) => {
      subscribe.unsubscribe();
      this.imagens = imagens;
    })
  }

}
