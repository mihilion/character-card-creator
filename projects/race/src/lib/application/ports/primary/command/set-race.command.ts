import { Race } from '../../../../../../../character/src/lib/application/character.model';

export interface SetRaceCommand {
  readonly raceKey: Race['key'];
}
