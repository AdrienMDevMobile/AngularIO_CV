import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { DiplomasComponent } from './diplomas/diplomas.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MouseWheelDirective } from './mousewheel.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    WelcomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperiencesComponent,
    DiplomasComponent,
    HobbiesComponent,
    MouseWheelDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
