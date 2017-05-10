import { Component, OnInit } from '@angular/core';
import { Feature } from './model/feature';
import { ToggleItService } from './toggle.it.service';


@Component({
  selector: 'toggle-it-component',
  template: './toggle.it.component.html',
  styleUrls: ['./toggle.it.component.css']
})
export class ToggleItComponent implements OnInit{

  public features: Feature[];

  constructor(
    private toggleItService: ToggleItService
  ) { }

  ngOnInit() {
    //load features list from features.json and place it in page
    this.toggleItService.initFeatures(this.features) ;

  }

}
