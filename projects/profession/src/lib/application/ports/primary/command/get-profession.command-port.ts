import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProfessionCommand } from './get-profession.command';

export const GET_PROFESSION_COMMAND_PORT =
  new InjectionToken<GetProfessionCommandPort>('GET_PROFESSION_COMMAND_PORT');

export interface GetProfessionCommandPort {
  getProfession(): Observable<GetProfessionCommand>;
}
