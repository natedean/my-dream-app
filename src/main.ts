import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
// import { instrumentS } from '@ngrx/devtools';
import { MyDreamAppAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MyDreamAppAppComponent, [
  // provideStore({ todos, visibilityFilter })
]);
