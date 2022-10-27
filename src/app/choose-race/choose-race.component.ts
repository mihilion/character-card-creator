import { Component, OnInit } from '@angular/core';
import {StateService} from '../state.service';

interface Race {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-choose-race',
  templateUrl: './choose-race.component.html',
  styleUrls: ['./choose-race.component.scss']
})
export class ChooseRaceComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
  }

  races: Race[] = [
    {value: 'human', viewValue: 'Human'},
    {value: 'elf', viewValue: 'Elf'},
    {value: 'ogre', viewValue: 'Ogre'},
  ];

  saveRace(raceValue: string) {
    this.stateService.state.raceValue = raceValue;
  }
}
