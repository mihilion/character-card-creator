import { Race } from '../../../../model/model';

export interface GetRaceCommand {
  readonly raceKey: Race['key'];
}
