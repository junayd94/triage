import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // default page
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' } // fallback to welcome
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
