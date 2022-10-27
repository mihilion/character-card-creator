import {Component, OnInit} from '@angular/core';
import {StateService} from '../state.service';

interface Profession {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-choose-profession',
  templateUrl: './choose-profession.component.html',
  styleUrls: ['./choose-profession.component.scss']
})
export class ChooseProfessionComponent implements OnInit {

  public raceValue = '';

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.raceValue = this.stateService.state.raceValue;
  }

  professions = {
    'human': [
      {
        value: 'warrior',
        viewValue: 'Warrior'
      },
      {
        value: 'wizard',
        viewValue: 'Wizard'
      },
      {
        value: 'hunter',
        viewValue: 'Hunter'
      }
    ],
    'elf': [
      {
        value: 'warrior',
        viewValue: 'Warrior'
      },
      {
        value: 'hunter',
        viewValue: 'Hunter'
      }
    ],
    'ogre': [
      {
        value: 'warrior',
        viewValue: 'Warrior'
      }
    ]
  }

  saveProfession(professionValue: string) {
    this.stateService.state.professionValue = professionValue;
  }
}
