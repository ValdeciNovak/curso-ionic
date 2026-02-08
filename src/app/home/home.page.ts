import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonRouterLink, IonItem, IonLabel, IonList, IonAvatar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonRouterLink, IonButton, RouterLink, IonItem, IonLabel, IonList, IonAvatar, IonGrid, IonRow, IonCol]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
