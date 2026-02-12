import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map }from "rxjs/operators";

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard]
})
export class CityPage implements OnInit {

  id: any;
  finalId: number=0;
  cities: any[] = [];
  name: string = '';
  image: string = '';
  desc: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,    
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.finalId = this.id - 1;
    console.log(this.id);

    this.getCities().subscribe(res=>{
    console.log(res);
    this.cities=res;
    this.name=this.cities[this.finalId].name;
    this.image=this.cities[this.finalId].image;
    this.desc=this.cities[this.finalId].desc;
    console.log(this.name);
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
}
