import { Race } from '../../../../model/model';

export interface SetRaceCommand {
  readonly raceKey: Race['key'];
}
