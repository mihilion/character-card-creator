import { Profession } from '../../../../model/model';

export interface GetProfessionCommand {
  readonly professionKey: Profession['key'];
}
