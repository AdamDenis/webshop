import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClothPageComponent} from "./cloth-page/cloth-page.component";
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tags/:tag', component: HomeComponent},
  {path:'cloth/:id', component: ClothPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
