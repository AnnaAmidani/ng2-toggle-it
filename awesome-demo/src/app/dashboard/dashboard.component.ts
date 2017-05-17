import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToggleItService } from 'ng2-toggle-it';
import { Feature } from '../model/feature';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  featureForm: FormGroup;
  public features: Feature[];

  constructor(
    private toggleItService: ToggleItService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.featureForm = this.formBuilder.group({
      name: ['', Validators.required],
      description:  ['', Validators.compose([Validators.required, Validators.pattern('\\w+( +\\w+)*'), Validators.maxLength(128)])],
      enabled: [ '', Validators.required]
    });
    this.features = this.toggleItService.getAllFeatures();
  }

  toggleFeature(featureName: string, enable: boolean) {
    console.log('toggleFeature call');
    this.toggleItService.toggleFeature(featureName, enable);
  }

  deleteFeature(feature: Feature) {
    console.log('deleteFeature call');
    this.toggleItService.deleteFeature(feature);
  }

  addFeature(feature: Feature) {
    console.log('addFeature call');
    let newFeature = new Feature(this.featureForm.value.name,
                                 this.featureForm.value.enabled,
                                 this.featureForm.value.description,
                                 new Date());
    this.toggleItService.addFeature(newFeature);
  }

}
