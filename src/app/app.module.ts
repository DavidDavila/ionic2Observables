import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { MapPage } from '../pages/map/map';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDad5jaCI6OgGGlCXwsw8ZewWr5ZwXV1To'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
//AIzaSyDad5jaCI6OgGGlCXwsw8ZewWr5ZwXV1To
export class AppModule {}
