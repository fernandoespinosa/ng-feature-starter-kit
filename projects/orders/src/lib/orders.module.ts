import { NgModule } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'orders',
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'first-page' },
          { path: 'first-page', component: FirstPageComponent },
          { path: 'second-page', component: SecondPageComponent },
        ]
      },
    ])
  ],
  declarations: [FirstPageComponent, SecondPageComponent],
  exports: []
})
export class OrdersModule { }
