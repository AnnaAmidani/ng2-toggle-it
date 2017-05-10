import { Inject, InjectionToken, Injectable, Optional, Renderer, SkipSelf } from '@angular/core';
import { Feature } from './model/feature';


@Injectable()
export class ToggleItService {
    constructor(
        //@Inject(DOCUMENT) private document: any,
        //@Inject(WINDOW) private window: any,
    ) { }


    public getAll(): Feature[] {
        try {

        } catch (error) {

        }
        return null;
    }


    public addItem(feature: Feature) {

    }

    public enableItem(feature: Feature) {

    }

    public deleteItem(feature: Feature) {

    }
}

// see https://github.com/angular/angular/issues/13854 in #43
export function TOGGLE_SERVICE_PROVIDER_FACTORY(parentDispatcher: ToggleItService) {
    return parentDispatcher || new ToggleItService();
};

export const TOGGLE_SERVICE_PROVIDER = {
    provide: ToggleItService,
    useFactory: TOGGLE_SERVICE_PROVIDER_FACTORY
};
