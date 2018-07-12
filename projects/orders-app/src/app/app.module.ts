import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersModule } from 'orders';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrdersModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'orders' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
