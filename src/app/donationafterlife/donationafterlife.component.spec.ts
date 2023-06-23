import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationafterlifeComponent } from './donationafterlife.component';

describe('DonationafterlifeComponent', () => {
  let component: DonationafterlifeComponent;
  let fixture: ComponentFixture<DonationafterlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationafterlifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationafterlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
