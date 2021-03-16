import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IpDisplayComponent } from './ip-display/ip-display.component';

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'ipFetch' , component : IpDisplayComponent, data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
