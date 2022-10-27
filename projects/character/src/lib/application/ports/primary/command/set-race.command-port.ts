import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetRaceCommand } from './set-race.command';

export const SET_RACE_COMMAND_PORT = new InjectionToken<SetRaceCommandPort>('SET_RACE_COMMAND_PORT');

export interface SetRaceCommandPort {
  setRace(command: SetRaceCommand): Observable<void>;
}
