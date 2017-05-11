# ng2-toggle-it

## Installation

To install this library, run:

```bash
$ npm install ng2-toggle-it --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

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
    ToggleItModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

1) map the ToggleItComponent under the route you prefer (if you are using Route), for loading/securing the admin dashboard as you like.
ie.

```typescript
RouterModule.forRoot([
      { path: '', component: AppComponent  },
      { path: 'login', component: LoginComponent },
      { path: 'toggle-dashboard', component: ToggleItComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),

```

```xml
<!-- You can now use your library component in app.component.html -->
<pre>
  <div>
    <h1>use directive as follows:</h1>
    <div *toggleIt="features.featureName.enabled">
      <div>UI block that must be created when the toggling is enabled on the feature</div>
    </div>
    <div *toggleIt="!features.featureName.enabled">
      <div>UI block that must be created when the toggling is disabled on the feature</div>
    </div>
  </div>
</pre>

<toggle-it-component></toggle-it-component>
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
