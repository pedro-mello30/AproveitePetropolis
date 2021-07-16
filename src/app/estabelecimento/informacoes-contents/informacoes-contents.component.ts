import {Component, Input, OnInit} from '@angular/core';
import {EstabelecimentosImagensService} from "../shared/estabelecimentos-imagens.service";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-informacoes-contents',
  templateUrl: './informacoes-contents.component.html',
  styleUrls: ['./informacoes-contents.component.scss'],
})
export class InformacoesContentsComponent implements OnInit {

  @Input() estabelecimento;
  imagens;

  constructor(
    private route: ActivatedRoute,
    private estabelecimentosImagensService: EstabelecimentosImagensService,
    private photoViewer: PhotoViewer
  ) { }

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('key');
    if (key) {
      const subscribe = this.estabelecimentosImagensService.getByField('estabelecimentoKey', key).subscribe((imagens) => {
        subscribe.unsubscribe();
        this.imagens = imagens;
      })
    }
  }

  openImg(path: string){
    this.photoViewer.show(path);
  }

}
