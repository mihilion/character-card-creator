import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldChooseProfessionComponent } from './old-choose-profession.component';

describe('ChooseProfessionComponent', () => {
  let component: OldChooseProfessionComponent;
  let fixture: ComponentFixture<OldChooseProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldChooseProfessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldChooseProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
