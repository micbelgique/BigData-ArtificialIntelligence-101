import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetectorComponent } from './detector/detector.component';


const routes: Routes = [
  { path: '**', component: DetectorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
