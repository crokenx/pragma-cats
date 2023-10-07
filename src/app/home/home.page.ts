import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';
import { Cat } from './models/cat';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cats$: Observable<Cat[]> = new Observable<Cat[]>();
  catImgUrl = env.catImgUrl;
  brokenCat = env.brokenCat;

  constructor(
    private generalService: GeneralService,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.cats$ = this.generalService.catList();
  }

  brokenImg(event: Event){
    const img = event.target as HTMLImageElement;
    img.src = this.brokenCat;
  }

  close() {
    this.modalController.dismiss();
  }
}
