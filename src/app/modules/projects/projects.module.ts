import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { AnalyticsComponent } from './project-board/analytics/analytics.component';
import { TasksComponent } from './project-board/tasks/tasks.component';
import { AnnouncementComponent } from './project-board/announcement/announcement.component';
import { TeamComponent } from './project-board/team/team.component';
import { SettingsComponent } from './project-board/settings/settings.component';

@NgModule({
  declarations: [
    ProjectsComponent, 
    ProjectBoardComponent,
    AnalyticsComponent,
    TasksComponent,
    AnnouncementComponent,
    TeamComponent,
    SettingsComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
