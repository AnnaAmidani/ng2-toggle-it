import { Component, OnInit, OnDestroy } from '@angular/core';
import { Feature } from '../model/feature';
import { ToggleItService } from '../toggle.it.service';


@Component({
  selector: 'toggle-it-component',
  template: './toggle.it.component.html',
  styleUrls: ['./toggle.it.component.css']
})
export class ToggleItComponent implements OnInit {

  public features: Feature[];

  constructor(
    private toggleItService: ToggleItService
  ) { }

  ngOnInit() {
    // load features list from your backend (json, xml,...) and put them in Feature[] obj array
    let feature1: Feature;
    feature1.setKey('DDD-124');
    feature1.setEnabled(true);
    feature1.setCreation(new Date('2017-01-12'));
    feature1.setDescription('myAviva login');
    this.features.push(feature1);

    let feature2: Feature;
    feature2.setKey('DDD-126');
    feature2.setEnabled(false);
    feature2.setCreation(new Date('2017-04-22'));
    feature2.setDescription('Chubb compliance');
    this.features.push(feature2);

    console.log('features length: ' + this.features.length);
    this.toggleItService.initFeatures(this.features);

  }


}
