import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-episode1',
  templateUrl: './episode1.page.html',
  styleUrls: ['./episode1.page.scss'],
})
export class Episode1Page implements OnInit {

  directors:any[]=[];
  epNum:number = 1;
  films:any[]=[];
  favMovie:string = " ";

  constructor(private service:DataService, private storage:Storage, private navCtrl:NavController) {}

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
          this.films = data.results;
          this.directors = data.results;
      
      });
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.favMovie = await this.storage.get('episode1');
    }

  async onSave(){
    await this.storage.create();
    await this.storage.set("episode1", this.favMovie);
    await this.navCtrl.navigateBack('/home');
  }

}
