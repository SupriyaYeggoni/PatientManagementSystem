import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatcanbedonatedComponent } from './whatcanbedonated.component';

describe('WhatcanbedonatedComponent', () => {
  let component: WhatcanbedonatedComponent;
  let fixture: ComponentFixture<WhatcanbedonatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatcanbedonatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatcanbedonatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
