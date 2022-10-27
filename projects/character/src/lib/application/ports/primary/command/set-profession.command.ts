import {Profession} from '../../../../model/model';

export interface SetProfessionCommand {
  readonly professionKey: Profession['key'];
}
