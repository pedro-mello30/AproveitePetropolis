import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public estabelecimentos;

  constructor() {
    this.estabelecimentos = Array(5).fill(4);


  }

  ngOnInit() {
  }

}
