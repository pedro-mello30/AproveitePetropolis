import {Component, Input, OnInit} from '@angular/core';
import {CupomService} from "../../cupom/shared/cupom.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-cupom-contents',
  templateUrl: './cupom-contents.component.html',
  styleUrls: ['./cupom-contents.component.scss'],
})
export class CupomContentsComponent implements OnInit {

  @Input() estabelecimento;
  // cupons: Observable<any[]>;
  cupons;

  constructor(
    private cuponsService: CupomService
  ) { }

  ngOnInit() {
    console.log(this.estabelecimento.key);
    const subscribe = this.cuponsService.getByField('estabelecimentoKey', this.estabelecimento.key).subscribe((cupons: any[]) =>{
      this.cupons = cupons;
    })
    // const subscribe = this.cuponsService.getByEstabelecimento(this.estabelecimento.key, true).subscribe((cupons: any[]) =>{
    //   this.cupons = cupons;
    // })
  }



}
