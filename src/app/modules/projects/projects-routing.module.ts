import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'project-name', component: ProjectBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
