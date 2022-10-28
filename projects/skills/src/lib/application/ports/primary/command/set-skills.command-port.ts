import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetSkillsCommand } from './set-skills.command';

export const SET_SKILLS_COMMAND_PORT = new InjectionToken<SetSkillsCommandPort>('SET_SKILLS_COMMAND_PORT');

export interface SetSkillsCommandPort {
  setSkills(command: SetSkillsCommand): Observable<void>;
}
