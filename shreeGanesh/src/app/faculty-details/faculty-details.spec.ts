import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDetails } from './faculty-details';

describe('FacultyDetails', () => {
  let component: FacultyDetails;
  let fixture: ComponentFixture<FacultyDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
