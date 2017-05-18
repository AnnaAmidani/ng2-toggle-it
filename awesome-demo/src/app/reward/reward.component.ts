import { Component, OnInit } from '@angular/core';
import { ToggleItService } from 'ng2-toggle-it';
import { Feature } from '../model/feature';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  features: Feature[];

  constructor(
    private toggleItService: ToggleItService
  ) { }

  ngOnInit() {
    this.features = this.toggleItService.getAll();
  }

}
