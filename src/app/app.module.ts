import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//UI Modules
import { TableModule  } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';

//Components
import { AppComponent } from '@app/app.component';
import { CategoriesComponent } from '@app/categories/categories.component';
import { QuestionsComponent } from '@app/questions/questions.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:      [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule, 
    FormsModule,  
    HttpClientModule,
    TableModule,
    ChartModule,
    RadioButtonModule,
    ButtonModule, ],
  declarations: [ AppComponent, QuestionsComponent, CategoriesComponent, ResultsComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
