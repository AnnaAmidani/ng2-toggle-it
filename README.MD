# ng2-toggle-it
This library adds feature toggling capability to your angular2 app.
You can use a directive and an injectable service that exposes the most common operations, storing the data into localStorage with the key 'feature-toggle-list'.
For permanently persisting the list of features a backend service is needed (this part is out of scope for this project).

Download the angular-cli project "awesome-demo" for viewing all the capabilities in action:

1) Download the full project from my github repo

2) Assuming that you already have node, npm and angular-cli installed:
```bash
$ cd awesome-demo
$ npm install
$ ng serve
```
3) Access the application via browser at localhost:4200 and follow the link to the toggle dashboard for changing, adding, deleting features.

4) See the outcome in the home page

## Installation

To install this library, run:

```bash
$ npm install ng2-toggle-it --save
```

## Consuming your library

You can import your library in any Angular application by running:

```bash
$ npm install ng2-toggle-it
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToggleItModule, ToggleItService } from 'ng2-toggle-it';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToggleItModule
  ],
  providers: [
    ToggleItService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its service in your components, ie:

```typescript
export class AppComponent implements OnInit {
  public features: Feature[];

  constructor(
    private toggleItService: ToggleItService
  ) { }

  ngOnInit() {
    // load features list from your backend (json, xml,...) and init the list of features using the service.
    let feature1 = new Feature('Feature-1', true, 'Awesome new look', new Date('2017-01-12'));
    let feature2 = new Feature('Feature-2', false, 'Awesome compliance change', new Date('2017-04-20'));
    this.features = [feature1, feature2];
    this.toggleItService.setFeatureList(this.features);
  }
```

This is an extract from the Feature model used:

```typescript
export class Feature {

    key: string;
    enabled: boolean;
    description: string;
    creation: Date;

    constructor( key: string, enabled: boolean, description: string, creation: Date ) {
      this.key = key;
      this.enabled = enabled;
      this.description = description;
      this.creation = creation;
    }

```

And this is the directive you can use everywhere in your templates:

```xml
<pre>
  <div>
    <h1>use directive as follows:</h1>
    <div *toggleIt="feature.enabled">
      <div>UI block that must be created when the toggling is enabled on the feature</div>
    </div>
    <div *toggleIt="!feature.enabled">
      <div>UI block that must be created when the toggling is disabled on the feature</div>
    </div>
  </div>
</pre>
```

Here is the list of services exposed by the ToggleItService:
```typescript
public setFeatureList(features: Feature[]);
public getAll(): Feature[];
public getFeature(key: string): any;
public toggleFeature(key: string, enabled: boolean): any;
public addFeature(feature: Feature): any;
public deleteFeature(feature: Feature): any;
```


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Anna Amidani](mailto:an5tash@gmail.com)
