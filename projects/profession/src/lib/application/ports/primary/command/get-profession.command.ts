import { Profession } from '../../../../../../../character/src/lib/application/character.model';

export interface GetProfessionCommand {
  readonly professionKey: Profession['key'];
}
