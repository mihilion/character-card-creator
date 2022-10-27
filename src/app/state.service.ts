import { Injectable } from '@angular/core';

export interface State {
  raceValue: string;
  professionValue: string;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _state: State;

  get state(): State {
    return this._state;
  }

  set state(value: State) {
    this._state = value;
  }

  constructor() {
    this._state = <State>{};
  }
}
