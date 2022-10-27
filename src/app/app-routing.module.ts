import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldChooseRaceComponent } from './choose-race/old-choose-race.component';
import { OldChooseProfessionComponent } from './choose-profession/old-choose-profession.component';
import { OldChooseSkillsComponent } from './choose-skills/old-choose-skills.component';
import { ChooseRacePage } from './pages/choose-race.page';
import { ChooseProfessionPage } from './pages/choose-profession.page';
import { ChooseRacePageModule } from './pages/choose-race.page-module';
import { ChooseProfessionPageModule } from './pages/choose-profession.page-module';

const routes: Routes = [
  { path: '', component: OldChooseRaceComponent },
  { path: 'choose-race', component: OldChooseRaceComponent },
  { path: 'choose-profession', component: OldChooseProfessionComponent },
  { path: 'choose-skills', component: OldChooseSkillsComponent },
  { path: 'choose-race-page', component: ChooseRacePage },
  { path: 'choose-profession-page', component: ChooseProfessionPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChooseRacePageModule, ChooseProfessionPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
