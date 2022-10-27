import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldChooseRaceComponent } from './old-choose-race.component';

describe('ChooseRaceComponent', () => {
  let component: OldChooseRaceComponent;
  let fixture: ComponentFixture<OldChooseRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OldChooseRaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OldChooseRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
