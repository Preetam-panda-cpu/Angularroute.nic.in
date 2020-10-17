import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JpnagarComponent } from './jpnagar/jpnagar.component';
import { JaynagarComponent } from './jaynagar/jaynagar.component';
import { BasavanagudiComponent } from './basavanagudi/basavanagudi.component';
import { BtmComponent } from './btm/btm.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// do some config
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'btm', component: BtmComponent},
  {path: 'basavanagudi', component: BasavanagudiComponent},
  {path: 'jaynagar', component: JaynagarComponent},
  { path: 'jpnagar', component: JpnagarComponent },
  {path: "**", component: PagenotfoundComponent}, // page not found
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    JpnagarComponent,
    JaynagarComponent,
    BasavanagudiComponent,
    BtmComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
