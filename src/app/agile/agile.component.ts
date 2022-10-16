import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MyService } from '../service/info-service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }title="Agile";
  buttonclick(){
    const service=new MyService();
    service.onclickbtn(this.title)
  }
}
