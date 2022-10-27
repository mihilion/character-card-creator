import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldChooseSkillsComponent } from './old-choose-skills.component';

describe('ChooseSkillsComponent', () => {
  let component: OldChooseSkillsComponent;
  let fixture: ComponentFixture<OldChooseSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OldChooseSkillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OldChooseSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
