import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowdonationworksComponent } from './howdonationworks.component';

describe('HowdonationworksComponent', () => {
  let component: HowdonationworksComponent;
  let fixture: ComponentFixture<HowdonationworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowdonationworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowdonationworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
