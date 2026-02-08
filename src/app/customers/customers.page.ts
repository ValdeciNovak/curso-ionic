import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonList, IonAvatar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map }from "rxjs/operators";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink, IonItem, IonLabel, IonList, IonAvatar]
})
export class CustomersPage implements OnInit {

  users: any=[];

  permission: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.permission = true;

  this.getUsers().subscribe(res=>{
    console.log(res);
    this.users=res;
  })
  }

  getUsers() {
    return this.http.get('assets/files/customers.json').pipe(
      map((res: any) =>
        {
      return res.data;
        }
    )
    );
  }

}
