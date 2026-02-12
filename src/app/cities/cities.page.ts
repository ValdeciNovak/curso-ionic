import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonRow, IonCard, ToastController } from '@ionic/angular/standalone';

import { HttpClient } from '@angular/common/http';
import { map }from "rxjs/operators";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, IonRow, IonCard, RouterLink]
})
export class CitiesPage implements OnInit {

  cities: any[] = [];

  constructor(  
    
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: ToastController

  ) { }

  ngOnInit() {
    
  this.getCities().subscribe(res=>{
    console.log(res);
    this.cities=res;
    })
  }
  
  getCities() {
    return this.http.get('assets/files/cities.json').pipe(
      map((res: any) =>
        {
      return res.data;
        }
    )
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Cidade selecionada",
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header:"Apagar cidade",
      message:"Cidade apagada com sucesso",
      buttons: ["OK"],
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  
  async presentAlert2() {
    const alert = await this.alertController.create({
      header:"Apagar cidade",
      message:"Apagar cidade, tem certeza?",
      buttons: [{
        text: "Não",
        handler: () => {
          console.log("Não cancelar");
        }
      },
      {
        text: "Sim",
        handler: () => {
          console.log("Sim apagar");
        }
      }
    
    ],
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}