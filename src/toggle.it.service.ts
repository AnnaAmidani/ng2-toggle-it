import { Injectable, } from '@angular/core';
import { Feature } from './model/feature';


@Injectable()
export class ToggleItService {

  private features: Feature[];

  constructor() { }

  public initFeatures(features: Feature[]) {
    this.features = features;
  }

  public getAll(): Feature[] {
    return this.features;
  }

  public setAll(features: Feature[]): any {
    return this.features = features;
  }

  public getFeature(key: string): Feature {
    try {
      for ( let feature of this.features ) {
        if ( feature.key === key ) {
          return feature;
        }
      }
      console.warn('no features found with name:' + key);
    } catch (error) {
      console.log(error);
    }
  }

  public toggleFeature(key: string, enabled: boolean): any {
    let success = false;
    try {
      for ( let feature of this.features ) {
        if ( feature.key === key ) {
          feature.enabled = enabled;
          return success = true;
        }
      }
      console.warn('no features found with name:' + key);
      return success;
    } catch (error) {
      console.log(error);
    }
  }

  public addFeature(feature: Feature): any {
    this.features.push(feature);
  }

  public deleteFeature(feature: Feature): any {
    let index: number = this.features.indexOf(feature, 0);
    if ( index > -1 ) {
       this.features.splice(index, 1);
    }
  }
}
