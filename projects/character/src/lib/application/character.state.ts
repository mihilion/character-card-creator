import {Inject, Injectable} from '@angular/core';
import {Observable, take} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {SetRaceCommandPort} from './ports/primary/command/set-race.command-port';
import {CHARACTER_CONTEXT_PORT, CharacterContextPort} from './ports/secondary/context/character.context-port';
import {SetRaceCommand} from './ports/primary/command/set-race.command';

@Injectable()
export class CharacterState implements SetRaceCommandPort {
  constructor(@Inject(CHARACTER_CONTEXT_PORT) private _characterContextPort: CharacterContextPort) {
  }

  setRace(command: SetRaceCommand): Observable<void> {
    return this._characterContextPort.getState().pipe(take(1), switchMap(data => this._characterContextPort.setState({
      name: data.name,
      gender: data.gender,
      raceId: command.raceId,
      professionId: data.professionId
    })));
  }
}
