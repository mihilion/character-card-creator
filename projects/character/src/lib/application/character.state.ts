import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { SetRaceCommandPort } from './ports/primary/command/set-race.command-port';
import { GetRaceCommandPort } from './ports/primary/command/get-race.command-port';
import { SetProfessionCommandPort } from './ports/primary/command/set-profession.command-port';
import {
  CHARACTER_CONTEXT_PORT,
  CharacterContextPort,
} from './ports/secondary/context/character.context-port';
import { SetRaceCommand } from './ports/primary/command/set-race.command';
import { GetRaceCommand } from './ports/primary/command/get-race.command';
import { SetProfessionCommand } from './ports/primary/command/set-profession.command';

@Injectable()
export class CharacterState
  implements SetRaceCommandPort, GetRaceCommandPort, SetProfessionCommandPort
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
          professionKey: data.professionKey,
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
}
