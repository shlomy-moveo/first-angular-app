import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {path:"flags",component:MainComponent},
  {path:"map",component:MapComponent},
  {path:"", pathMatch:"full", component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
