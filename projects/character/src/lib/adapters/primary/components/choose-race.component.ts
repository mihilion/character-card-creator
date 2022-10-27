import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {
  SET_RACE_COMMAND_PORT,
  SetRaceCommandPort
} from '../../../application/ports/primary/command/set-race.command-port';
import {Router} from '@angular/router';

interface Race {
  id: number;
  value: string;
}

@Component({
  selector: 'lib-choose-race',
  styleUrls: ['./choose-race.component.scss'],
  templateUrl: './choose-race.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseRaceComponent {

  races$: Observable<Race[]> = of([
    {id: 1, value: 'Human'},
    {id: 2, value: 'Elf'},
    {id: 3, value: 'Ogre'},
  ]);
  readonly raceForm: FormGroup = new FormGroup({raceId: new FormControl()});

  constructor(@Inject(SET_RACE_COMMAND_PORT) private _setRaceCommandPort: SetRaceCommandPort, private router: Router) {
  }

  onRaceFormSubmitted(raceForm: FormGroup): void {
    this._setRaceCommandPort.setRace({raceId: raceForm.get('raceId')?.value}).subscribe(() => {
      this.router.navigate(['/choose-profession']);
    });
  }
}
