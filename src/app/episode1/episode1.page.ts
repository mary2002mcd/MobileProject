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
  //declare variables
  films:any[]=[];
  favMovie:string = " ";
  //constuctor to allow use of imports
  constructor(private service:DataService, private storage:Storage, private navCtrl:NavController) {}
  //to get the api data
  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
          this.films = data.results;
 
      });
  }
  //data persistance
  async ionViewWillEnter() {
    await this.storage.create();
    this.favMovie = await this.storage.get('episode1');
    }
  //method to save the answer and redirect to the home page
  async onSave(){
    await this.storage.create();
    await this.storage.set("episode1", this.favMovie);
    await this.navCtrl.navigateBack('/home');
  }

}
