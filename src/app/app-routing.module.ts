import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionsComponent} from "./modules/components/questions/questions.component";

const routes: Routes = [
  {
    path: '', component: QuestionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
