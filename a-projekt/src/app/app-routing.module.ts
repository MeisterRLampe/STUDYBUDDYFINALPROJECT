import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {LearnerHubComponent} from "./learner-hub/learner-hub.component";
import {RoadmapComponent} from "./roadmap/roadmap.component";

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch:"full"},
  {path: "welcome", component: WelcomePageComponent},
  {path: "hub", component: LearnerHubComponent},
  {path: "roadmap", component: RoadmapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
