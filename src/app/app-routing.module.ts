import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseRacePage } from './pages/choose-race.page';
import { ChooseProfessionPage } from './pages/choose-profession.page';
import { ChooseRacePageModule } from './pages/choose-race.page-module';
import { ChooseProfessionPageModule } from './pages/choose-profession.page-module';

const routes: Routes = [
  { path: '', component: ChooseRacePage },
  { path: 'choose-race-page', component: ChooseRacePage },
  { path: 'choose-profession-page', component: ChooseProfessionPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ChooseRacePageModule,
    ChooseProfessionPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
