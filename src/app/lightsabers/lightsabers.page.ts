import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightsabers',
  templateUrl: './lightsabers.page.html',
  styleUrls: ['./lightsabers.page.scss'],
})
export class LightsabersPage implements OnInit {
//boolean variable
  hidden = true;
 
  constructor() { }

  ngOnInit() {
  }
//method to make the images appear
  show(){
    if(this.hidden == true){
      this.hidden = false;
    }
    else{
      this.hidden = true;
    } 

  }

}
