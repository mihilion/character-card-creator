import { Profession } from '../../../../../../../character/src/lib/application/character.model';

export interface SetProfessionCommand {
  readonly professionKey: Profession['key'];
}
