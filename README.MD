# ng2-toggle-it

This library provides ready-to-use classes for adding **feature toggling capability** to your angular2 application - activating or deactivating specific parts of your UI without the need for deploying new application versions.

You can use a **directive** in your template and an **injectable service** all over the application for managing the most common operations like enabling/disabling already defined features, adding new features or removing existing ones.
The service stores data in the *localStorage* (property *feature-toggle-list*: always contains the most up to date version of the whole list of features).

This approach is meant for letting you immediately test the outcome of what changed in your local session, before sending the final list to the *backend* for permanently persisting it - and making it effective.
Ideally the communication with the *backend* should occurr when the app is created (getting the whole list and initialising the service) and everytime the adminstrator of the features is happy with the changes applied (send back the whole list updated).

###### Demo
The angular-cli project **awesome-demo** is a FontEnd-Driven feature toggling example-app, showing the library capabilities (with a handy toggling admin dashboard). 

1) Download the full project from github

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
import { ToggleItModule } from 'ng2-toggle-it';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ToggleItModule.forRoot(),
  ],
  providers: [
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
      <foo-component></foo-component>
    </div>
    <div *toggleIt="!feature.enabled">
      <hello-component></hello-component>
    </div>
  </div>
</pre>
```

Here is the list of services exposed:
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
