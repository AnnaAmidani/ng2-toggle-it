import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToggleItService } from 'ng2-toggle-it';
import { Feature } from '../model/feature';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public features: Feature[];

  constructor(
    private toggleItService: ToggleItService
  ) { }

  ngOnInit() {
    // load features list from your backend (json, xml,...) and put them in Feature[] obj array.
    let feature1 = new Feature('Feature-1', true, 'Awesome new look', new Date('2017-01-12'));
    let feature2 = new Feature('Feature-2', false, 'Awesome compliance change', new Date('2017-04-20'));
    this.features=[feature1,feature2];
    this.toggleItService.initFeatures(this.features);

  }


}
