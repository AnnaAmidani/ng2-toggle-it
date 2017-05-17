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
  showAdd = false;
  errorMsg: string;

  constructor(
    private toggleItService: ToggleItService,
    private formBuilder: FormBuilder
  ) { }

  private updateFeaturesInPage() {
    this.features = this.toggleItService.getAll();
  }

  ngOnInit() {
    this.featureForm = this.formBuilder.group({
      name: ['', Validators.required],
      description:  ['', Validators.compose([Validators.required, Validators.pattern('\\w+( +\\w+)*'), Validators.maxLength(128)])],
      enabled: [ '' ]
    });
    this.features = this.toggleItService.getAll();
  }

  toggleFeature(featureName: string, enable: boolean) {
    this.toggleItService.toggleFeature(featureName, enable);
    this.updateFeaturesInPage();
  }

  deleteFeature(feature: Feature) {
    this.toggleItService.deleteFeature(feature);
    this.updateFeaturesInPage();
  }

  addFeature(feature: Feature) {
    let newFeature = new Feature(this.featureForm.value.name,
                                 this.featureForm.value.enabled,
                                 this.featureForm.value.description,
                                 new Date());
    let res = this.toggleItService.addFeature(newFeature);
    if(res instanceof Error) {
      this.errorMsg = res.message;
    }
    this.updateFeaturesInPage();
  }

  saveAll() {
    //Call YOUR BACKEND for persisting data
    this.updateFeaturesInPage();
  }

  showAddPanel(show: boolean) {
    this.showAdd = show;
  }

}
