import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';//import for api

@Component({
  selector: 'app-facts',
  templateUrl: './facts.page.html',
  styleUrls: ['./facts.page.scss'],
})
export class FactsPage implements OnInit {
  //declare variables
  movieData:any[]=[];
  //use data service
  constructor(private service:DataService) { }

  //get data from api
  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
          this.movieData = data.results;
      });
  }

}
