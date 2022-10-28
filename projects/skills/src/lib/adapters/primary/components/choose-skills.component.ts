import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {
  CHARACTER_CONTEXT_PORT,
  CharacterContextPort
} from '../../../../../../character/src/lib/application/ports/secondary/context/character.context-port';
import {
  CharacterContext
} from '../../../../../../character/src/lib/application/ports/secondary/context/character.context';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'lib-choose-skills',
  styleUrls: ['./choose-skills.component.scss'],
  templateUrl: './choose-skills.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseSkillsComponent implements OnInit {

  public context: CharacterContext = <CharacterContext>{};

  constructor(@Inject(CHARACTER_CONTEXT_PORT)
              private _characterContextPort: CharacterContextPort) {
  }

  ngOnInit(): void {
    this._characterContextPort.getState().subscribe(context => this.context = context);
  }
}
