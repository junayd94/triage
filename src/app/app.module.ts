import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AnatomyComponent } from './anatomy/anatomy.component';
import { SectionComponent } from './anatomy/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    AnatomyComponent,
    SectionComponent // ✅ declare it here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule // ✅ needed for ngStyle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
