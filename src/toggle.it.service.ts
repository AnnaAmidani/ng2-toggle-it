import { Injectable, } from '@angular/core';
import { Feature } from './model/feature';
import { Props } from './const/props';


@Injectable()
export class ToggleItService {

  constructor() { }


  private getFromLocalStorage(): Feature[] {
    return JSON.parse(localStorage.getItem(Props.STORAGE_KEY));
  }

  private saveInLocalStorage(features: Feature[]) {
    localStorage.setItem(Props.STORAGE_KEY, JSON.stringify(features));
  }

  public setFeatureList(features: Feature[]) {
    try {
      this.saveInLocalStorage(features);
    } catch (error) {
      console.warn(error);
    }
  }

  public getAll(): Feature[] {
    try {
      return this.getFromLocalStorage();
    } catch (error) {
      console.warn(error);
    }
  }

  public getFeature(key: string): any {
    try {
      for (let feature of this.getFromLocalStorage()) {
        if (feature.key === key) {
          return feature;
        }
      }
      return new Error('No features found with name:' + key);
    } catch (error) {
      console.warn(error);
    }
  }

  public toggleFeature(key: string, enabled: boolean): any {
    try {
      let features = this.getFromLocalStorage();
      for (let feature of features) {
        if (feature.key === key) {
          feature.enabled = enabled;
          this.saveInLocalStorage(features);
          return;
        }
      }
      return new Error('No features found with name:' + key);
    } catch (error) {
      console.warn(error);
    }
  }

  public addFeature(feature: Feature): any {
    try {
      let features = this.getFromLocalStorage();
      for (let f of features) {
        if (f.key === feature.key) {
          return new Error('Duplicated key: feature names must be unique');
        }
      }
      features.push(feature);
      this.saveInLocalStorage(features);
    } catch (error) {
      console.warn(error);
    }
  }

  public deleteFeature(feature: Feature): any {
    try {
      let features = this.getFromLocalStorage();
      for (let f of features) {
        if (f.key === feature.key) {
          let index: number = features.indexOf(f, 0);
          if ( index > -1 ) {
             features.splice(index, 1);
             this.saveInLocalStorage(features);
             return;
          }
        }
      }
      return new Error('No deletion performed as no features found with name:' + feature.key);
    } catch (error) {
      console.warn(error);
    }
  }

}
