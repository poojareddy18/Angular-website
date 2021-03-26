import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectsComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
