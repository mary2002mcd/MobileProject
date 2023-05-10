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

  //declare variables and arrays
  films:any[]=[];
  movie:string =" ";
  favMovie:string = " ";
  //fill constructor with varibales in order to use the imports
  constructor(private service:DataService, private storage:Storage, private navCtrl:NavController) {}

  // get api data
  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
          this.films = data.results;
      });
  }
  //for data persistance
  async ionViewWillEnter(){
    await this.storage.create();
    this.favMovie = await this.storage.get('episode1');
  }
}
