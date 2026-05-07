import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterploationBinding } from './interploation-binding';

describe('InterploationBinding', () => {
  let component: InterploationBinding;
  let fixture: ComponentFixture<InterploationBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterploationBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterploationBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
