import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { RisorseComponent } from './risorse/risorse.component';
import { RisorseHstComponent } from './risorse-hst/risorse-hst.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
 // { path: 'risorse', component: RisorseComponent},
  { path: 'risorse-hst', component: RisorseHstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
