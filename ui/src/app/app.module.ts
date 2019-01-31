import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/app/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './store/todo/todo.effects';
import {LayoutComponent} from './layout/layout.component';
import {MatButtonModule, MatListModule, MatSidenavModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
