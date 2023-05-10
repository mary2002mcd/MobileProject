import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Storage} from '@ionic/storage-angular'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  films:any[]=[];
  movie:string =" ";
  episode:any[]=[];
  favMovie:string = " ";
  constructor(private service:DataService, private storage:Storage, private navCtrl:NavController) {}

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
          this.films = data.results;
          this.episode = data.results;
      });
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.favMovie = await this.storage.get('episode1');
  }
}
