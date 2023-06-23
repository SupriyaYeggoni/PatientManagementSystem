import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingdonarComponent } from './livingdonar.component';

describe('LivingdonarComponent', () => {
  let component: LivingdonarComponent;
  let fixture: ComponentFixture<LivingdonarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingdonarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingdonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
