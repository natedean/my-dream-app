import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyDreamAppAppComponent } from './my-dream-app.component';

beforeEachProviders(() => [MyDreamAppAppComponent]);

describe('App: MyDreamApp', () => {
  it('should create the app',
      inject([MyDreamAppAppComponent], (app: MyDreamAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-dream-app works!\'',
      inject([MyDreamAppAppComponent], (app: MyDreamAppAppComponent) => {
    expect(app.title).toEqual('my-dream-app works!');
  }));
});
