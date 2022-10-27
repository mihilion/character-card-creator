import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { SetRaceCommandPort } from '../../../../race/src/lib/application/ports/primary/command/set-race.command-port';
import { GetRaceCommandPort } from '../../../../race/src/lib/application/ports/primary/command/get-race.command-port';
import { SetProfessionCommandPort } from '../../../../profession/src/lib/application/ports/primary/command/set-profession.command-port';
import { GetProfessionCommandPort } from '../../../../profession/src/lib/application/ports/primary/command/get-profession.command-port';
import {
  CHARACTER_CONTEXT_PORT,
  CharacterContextPort,
} from './ports/secondary/context/character.context-port';
import { SetRaceCommand } from '../../../../race/src/lib/application/ports/primary/command/set-race.command';
import { GetRaceCommand } from '../../../../race/src/lib/application/ports/primary/command/get-race.command';
import { SetProfessionCommand } from '../../../../profession/src/lib/application/ports/primary/command/set-profession.command';
import { GetProfessionCommand } from '../../../../profession/src/lib/application/ports/primary/command/get-profession.command';

@Injectable()
export class CharacterState
  implements
    SetRaceCommandPort,
    GetRaceCommandPort,
    SetProfessionCommandPort,
    GetProfessionCommandPort
{
  constructor(
    @Inject(CHARACTER_CONTEXT_PORT)
    private _characterContextPort: CharacterContextPort
  ) {}

  setRace(command: SetRaceCommand): Observable<void> {
    return this._characterContextPort.getState().pipe(
      take(1),
      switchMap((data) =>
        this._characterContextPort.setState({
          name: data.name,
          gender: data.gender,
          raceKey: command.raceKey,
          professionKey: data.raceKey === command.raceKey ? data.professionKey : undefined,
        })
      )
    );
  }

  getRace(): Observable<GetRaceCommand> {
    return this._characterContextPort
      .getState()
      .pipe(map((state) => <GetRaceCommand>{ raceKey: state.raceKey }));
  }

  setProfession(command: SetProfessionCommand): Observable<void> {
    return this._characterContextPort.getState().pipe(
      take(1),
      switchMap((data) =>
        this._characterContextPort.setState({
          name: data.name,
          gender: data.gender,
          raceKey: data.raceKey,
          professionKey: command.professionKey,
        })
      )
    );
  }

  getProfession(): Observable<GetProfessionCommand> {
    return this._characterContextPort
      .getState()
      .pipe(
        take(1),
        map(
          (state) =>
            <GetProfessionCommand>{ professionKey: state.professionKey }
        )
      );
  }
}
