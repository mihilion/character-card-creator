import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRaceComponent } from './choose-race.component';

describe('ChooseRaceComponent', () => {
  let component: ChooseRaceComponent;
  let fixture: ComponentFixture<ChooseRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
