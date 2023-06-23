import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhocandonateComponent } from './whocandonate.component';

describe('WhocandonateComponent', () => {
  let component: WhocandonateComponent;
  let fixture: ComponentFixture<WhocandonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhocandonateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhocandonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
