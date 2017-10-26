import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent }   from './welcome/welcome.component';
import { SkillsComponent }      from './skills/skills.component';
import { ProjectsComponent }      from './projects/projects.component';
import { DiplomasComponent }      from './diplomas/diplomas.component';
import { ExperiencesComponent }      from './experiences/experiences.component';
import { HobbiesComponent }      from './hobbies/hobbies.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'diplomas', component: DiplomasComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'hobbies', component: HobbiesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}