import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecipesComponent } from './recipes/recipes.component';
const routes: Routes = [
  { path: '', component: IntroComponent },              
     {path: 'projects' , component: ProjectsComponent },   
     {path: 'recipes' , component: RecipesComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
