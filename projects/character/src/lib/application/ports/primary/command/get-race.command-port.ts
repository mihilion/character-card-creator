import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GetRaceCommand } from './get-race.command';

export const GET_RACE_COMMAND_PORT = new InjectionToken<GetRaceCommandPort>('GET_RACE_COMMAND_PORT');

export interface GetRaceCommandPort {
  getRace(): Observable<GetRaceCommand>;
}
