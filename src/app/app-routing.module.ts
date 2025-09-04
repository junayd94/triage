import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AnatomyComponent } from './anatomy/anatomy.component';
import { SectionComponent } from './anatomy/section/section.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // default page
  { path: 'anatomy', component: AnatomyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'section/:id', component: SectionComponent },
  { path: '**', redirectTo: '' } // fallback to welcome
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
