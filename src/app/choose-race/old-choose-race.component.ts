import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

interface Race {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-choose-race',
  templateUrl: './old-choose-race.component.html',
  styleUrls: ['./old-choose-race.component.scss'],
})
export class OldChooseRaceComponent implements OnInit {
  constructor(private stateService: StateService) {}

  ngOnInit(): void {}

  races: Race[] = [
    { value: 'human', viewValue: 'Human' },
    { value: 'elf', viewValue: 'Elf' },
    { value: 'ogre', viewValue: 'Ogre' },
  ];

  saveRace(raceValue: string) {
    this.stateService.state.raceValue = raceValue;
  }
}
