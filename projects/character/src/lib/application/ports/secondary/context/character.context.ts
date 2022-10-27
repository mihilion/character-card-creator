import { Profession, Race } from '../../../character.model';


export interface CharacterContext {
  readonly name: string;
  readonly gender: string;
  readonly raceKey: Race['key'] | undefined;
  readonly professionKey: Profession['key'] | undefined;
}
