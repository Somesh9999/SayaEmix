import { Component, OnInit } from '@angular/core';
import { stageInfo } from '../stage-teaser/stageinfo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stageInfo:stageInfo;

  constructor() { }

  ngOnInit(): void {
    this.stageInfo={stageImage:"../assets/home-banner.jpg",stageVideo:""}
  }

}
