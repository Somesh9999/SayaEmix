import { Component, Input, OnInit } from '@angular/core';
import { stageInfo } from './stageinfo.model';

@Component({
  selector: 'app-stage-teaser',
  templateUrl: './stage-teaser.component.html',
  styleUrls: ['./stage-teaser.component.css']
})
export class StageTeaserComponent implements OnInit {

  constructor() { }

  @Input() stageInfo:stageInfo

  ngOnInit(): void {
  }

}
