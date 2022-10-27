import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldChooseRaceComponent } from './choose-race/old-choose-race.component';
import { OldChooseProfessionComponent } from './choose-profession/old-choose-profession.component';
import { ChooseSkillsComponent } from './choose-skills/choose-skills.component';
import { ChooseRacePage } from './pages/choose-race.page';
import { ChooseRacePageModule } from './pages/choose-race.page-module';

const routes: Routes = [
  { path: '', component: OldChooseRaceComponent },
  { path: 'choose-race', component: OldChooseRaceComponent },
  { path: 'choose-profession', component: OldChooseProfessionComponent },
  { path: 'choose-skills', component: ChooseSkillsComponent },
  { path: 'choose-race-page', component: ChooseRacePage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChooseRacePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
