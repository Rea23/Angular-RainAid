import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MainbarComponent } from './components/mainbar/mainbar.component';

const routes: Routes = [
  { path: "", component: MainbarComponent },
  { path: "product/:id", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
