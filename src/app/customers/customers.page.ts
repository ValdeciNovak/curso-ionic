import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonList, IonAvatar, IonSearchbar, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map }from "rxjs/operators";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink, IonItem, IonLabel, IonList, IonAvatar, IonSearchbar, IonRefresher, IonRefresherContent]
})
export class CustomersPage implements OnInit {

  users: any=[];

  permission: boolean = false;

  searchedUser: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  this.permission = true;
  
  this.getUsers().subscribe(res=>{
    console.log(res);
    this.users=res;
  this.searchedUser=this.users;
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

  searchCustomer(event: any) {
    const text = event.target.value;  
    this.searchedUser=this.users;
    if (text && text.trim() !== '') {
      this.searchedUser = this.searchedUser.filter((user: any) => {
        return user.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
  }
}

doRefresh(event : any) {
  this.getUsers();
  console.log('Begin async operation');
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}
}
