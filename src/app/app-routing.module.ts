import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecipesComponent } from './recipes/recipes.component';
import { BudgetcalComponent } from './budgetcal/budgetcal.component';
const routes: Routes = [
  { path: '', component: IntroComponent },              
     {path: 'projects' , component: ProjectsComponent },   
     {path: 'recipes' , component: RecipesComponent }, 
     {path: 'budgetcal' , component: BudgetcalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
