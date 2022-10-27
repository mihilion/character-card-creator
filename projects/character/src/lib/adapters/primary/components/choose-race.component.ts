import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  SET_RACE_COMMAND_PORT,
  SetRaceCommandPort,
} from '../../../application/ports/primary/command/set-race.command-port';
import {
  GET_RACE_COMMAND_PORT,
  GetRaceCommandPort,
} from '../../../application/ports/primary/command/get-race.command-port';
import { Router } from '@angular/router';
import { Race } from '../../../model/model';

@Component({
  selector: 'lib-choose-race',
  styleUrls: ['./choose-race.component.scss'],
  templateUrl: './choose-race.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseRaceComponent implements OnInit {
  races$: Observable<Race[]> = of([
    { key: 'human', viewValue: 'Human' },
    { key: 'elf', viewValue: 'Elf' },
    { key: 'ogre', viewValue: 'Ogre' },
  ]);
  readonly raceForm: FormGroup = new FormGroup({ raceKey: new FormControl() });

  constructor(
    @Inject(SET_RACE_COMMAND_PORT)
    private _setRaceCommandPort: SetRaceCommandPort,
    private router: Router,
    @Inject(GET_RACE_COMMAND_PORT)
    private _getRaceCommandPort: GetRaceCommandPort
  ) {}

  onRaceFormSubmitted(raceForm: FormGroup): void {
    this._setRaceCommandPort
      .setRace({ raceKey: raceForm.get('raceKey')?.value })
      .subscribe(() => {
        this.router.navigate(['/choose-profession-page']);
      });
  }

  ngOnInit(): void {
    this._getRaceCommandPort
      .getRace()
      .subscribe((command) =>
        this.raceForm.get('raceKey')?.patchValue(command.raceKey)
      );
  }
}
