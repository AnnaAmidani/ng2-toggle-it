import { Component, OnInit } from '@angular/core';
import { ToggleItService } from 'ng2-toggle-it';
import { Feature } from '../model/feature';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  feature1 : Feature;
  feature2 : Feature;
  feature3 : Feature;

  constructor(
    private toggleItService: ToggleItService
  ) { }

  ngOnInit() {
    this.feature1 = this.toggleItService.getFeature('Feature-1');
    this.feature2 = this.toggleItService.getFeature('Feature-2');
    this.feature3 = this.toggleItService.getFeature('Feature-3');
  }

}
