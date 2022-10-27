import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Profession, Race } from '../../../model/model';
import {
  SET_PROFESSION_COMMAND_PORT,
  SetProfessionCommandPort,
} from '../../../application/ports/primary/command/set-profession.command-port';
import {
  GET_RACE_COMMAND_PORT,
  GetRaceCommandPort,
} from '../../../application/ports/primary/command/get-race.command-port';
import {
  GET_PROFESSION_COMMAND_PORT,
  GetProfessionCommandPort,
} from '../../../application/ports/primary/command/get-profession.command-port';
import { SetProfessionCommand } from '../../../application/ports/primary/command/set-profession.command';

@Component({
  selector: 'lib-choose-profession',
  styleUrls: ['./choose-profession.component.scss'],
  templateUrl: './choose-profession.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseProfessionComponent implements OnInit {
  readonly professionForm: FormGroup = new FormGroup({
    professionKey: new FormControl(),
  });
  public raceKey: Race['key'] = 'human';

  constructor(
    @Inject(SET_PROFESSION_COMMAND_PORT)
    private _setProfessionCommandPort: SetProfessionCommandPort,
    @Inject(GET_RACE_COMMAND_PORT)
    private _getRaceCommandPort: GetRaceCommandPort,
    @Inject(GET_PROFESSION_COMMAND_PORT)
    private _getProfessionCommandPort: GetProfessionCommandPort
  ) {}

  professions: Profession[] = [
    {
      key: 'warrior',
      viewValue: 'Warrior',
    },
    {
      key: 'wizard',
      viewValue: 'Wizard',
    },
    {
      key: 'hunter',
      viewValue: 'Hunter',
    },
  ];

  professionsByRace: Map<string, Profession['key'][]> = new Map([
    ['human', ['warrior', 'wizard', 'hunter']],
    ['elf', ['warrior', 'hunter']],
    ['ogre', ['warrior']],
  ]);

  professions$: Observable<Profession[]> = of(this.professionsByRace).pipe(
    map((byRace) => byRace.get(this.raceKey)),
    map((professionKeys) =>
      this.professions.filter((profession) =>
        professionKeys?.includes(profession.key)
      )
    )
  );

  onProfessionFormSubmitted(professionForm: FormGroup): void {
    this._setProfessionCommandPort.setProfession(<SetProfessionCommand>{
      professionKey: professionForm.get('professionKey')?.value,
    }).subscribe();
  }

  ngOnInit(): void {
    this._getRaceCommandPort
      .getRace()
      .subscribe((command) => (this.raceKey = command.raceKey));
    this._getProfessionCommandPort
      .getProfession()
      .subscribe((command) =>
        this.professionForm
          .get('professionKey')
          ?.patchValue(command.professionKey)
      );
  }
}
