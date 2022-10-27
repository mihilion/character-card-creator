import { Race } from '../../../../../../../character/src/lib/application/character.model';

export interface GetRaceCommand {
  readonly raceKey: Race['key'];
}
