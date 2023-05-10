import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  films:any[]=[];
  movie:string =" ";
  episode:any[]=[];
  constructor(private service:DataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
          this.films = data.results;
          this.episode = data.results;
      });
  }
}
