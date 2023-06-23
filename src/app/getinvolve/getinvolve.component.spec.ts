import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinvolveComponent } from './getinvolve.component';

describe('GetinvolveComponent', () => {
  let component: GetinvolveComponent;
  let fixture: ComponentFixture<GetinvolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinvolveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetinvolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
