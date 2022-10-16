import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="Benguluru"
  today=Date()
  user={
    id:100,
    name:"Steve",
    DOB:'10-10-1800',
    salary:"20000"
  }
}
