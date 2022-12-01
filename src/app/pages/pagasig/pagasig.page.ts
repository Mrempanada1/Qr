import { DataLocalService } from '../../services/data-local.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pagasig',
  templateUrl: './pagasig.page.html',
  styleUrls: ['./pagasig.page.scss'],
})
export class PagasigPage implements OnInit {

  constructor(private menu:MenuController, public dataLocal: DataLocalService) { }

  ngOnInit() {
  }


}
