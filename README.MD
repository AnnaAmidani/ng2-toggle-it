# ng2-toggle-it

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

Once your library is imported, you can use its service in your components, ie (see awesome-demo):

```typescript
export class DashboardComponent implements OnInit {
  public features: Feature[];

  constructor(
    private toggleItService: ToggleItService
  ) { }

  ngOnInit() {
    let feature1 = new Feature('Feature-1', true, 'Awesome new look', new Date('2017-01-12'));
    this.features=[feature1];
    this.toggleItService.initFeatures(this.features);
  }
```

and its directive:

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
