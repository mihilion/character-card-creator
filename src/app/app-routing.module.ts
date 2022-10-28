import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseRacePage } from './pages/choose-race.page';
import { ChooseProfessionPage } from './pages/choose-profession.page';
import { ChooseSkillsPage } from './pages/choose-skills.page';
import { ChooseRacePageModule } from './pages/choose-race.page-module';
import { ChooseProfessionPageModule } from './pages/choose-profession.page-module';
import { ChooseSkillsPageModule } from './pages/choose-skills.page-module';

const routes: Routes = [
  { path: '', component: ChooseRacePage },
  { path: 'choose-race-page', component: ChooseRacePage },
  { path: 'choose-profession-page', component: ChooseProfessionPage },
  { path: 'choose-skills', component: ChooseSkillsPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ChooseRacePageModule,
    ChooseProfessionPageModule,
    ChooseSkillsPageModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
