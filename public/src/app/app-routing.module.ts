import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'project1', component:Project1Component},
  {path:'project2', component:Project2Component},
  {path:'project3', component:Project3Component},
  {path:'resume', component:ResumeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
