import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.page.html',
  styleUrls: ['./facts.page.scss'],
})
export class FactsPage implements OnInit {

  movieData:any[]=[];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
          this.movieData = data.results;
      });
  }

}
