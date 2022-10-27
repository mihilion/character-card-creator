import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChooseRaceComponent} from './choose-race/choose-race.component';
import {ChooseProfessionComponent} from './choose-profession/choose-profession.component';
import {ChooseSkillsComponent} from './choose-skills/choose-skills.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseRaceComponent
  },
  {
    path: 'choose-race',
    component: ChooseRaceComponent
  },
  {
    path: 'choose-profession',
    component: ChooseProfessionComponent
  },
  {
    path: 'choose-skills',
    component: ChooseSkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
