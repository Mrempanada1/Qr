import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DataLocalService } from './../../services/data-local.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit {

  constructor
  ( private menu:MenuController,
    private st:Storage, 
    private rt:Router,
    private barcodeScanner: BarcodeScanner,
    private DataLocal: DataLocalService,
    public toastController: ToastController) {}

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  ionViewDidEnter(){
    //console.log('viewDidEnter');
  }

  ionViewDidLeave(){
    //console.log('viewDidLeave');
  }
  ionViewWillEnter(){
    //console.log('viewWillEnter')
    this.scan();
  }
  ionViewWillLeaver(){
    //console.log('viewWillLeave');
  }
  scan(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcodedata', barcodeData);

      if (!barcodeData.cancelled){
        this.DataLocal.guardarRegistro( barcodeData.format, barcodeData.text);
      }
    }).catch(err => {
        console.log('Error', err);

        this.DataLocal.guardarRegistro( 'QRCode', 'Base de Datos');
    });
  }



  ngOnInit() {
  }
  verMenu(){
    this.menu.open('first');
  }
  
  async presentToast3(){
    const toast = await this.toastController.create({
      message: 'Asistencia registrada',
      duration: 700,
      position: "bottom",
      color: "success"
    });
    toast.present()
  }


  }

