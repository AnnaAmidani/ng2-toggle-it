import { Component, OnInit } from '@angular/core';
import { ToggleItService } from 'ng2-toggle-it';
import { Feature } from './model/feature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToggleItService]
})
export class AppComponent implements OnInit{
  title = 'Feature toggle Demo';
  public features: Feature[];

  constructor(
    private toggleItService: ToggleItService
  ) { }


  ngOnInit() {
    if( localStorage.getItem('feature-toggle-list') === undefined) {
      // load features list from your backend (json, xml,...) and init the list of features using the service.
      let feature1 = new Feature('Feature-1', true, 'Awesome new look', new Date('2017-01-12'));
      let feature2 = new Feature('Feature-2', false, 'Awesome compliance change', new Date('2017-04-20'));
      let feature3 = new Feature('Feature-3', true, 'Awesome new menu', new Date('2017-04-20'));
      this.features = [feature1, feature2, feature3];
      this.toggleItService.setFeatureList(this.features);
    }
  }

}
