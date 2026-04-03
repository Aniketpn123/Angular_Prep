import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeEx } from './attribute-ex';

describe('AttributeEx', () => {
  let component: AttributeEx;
  let fixture: ComponentFixture<AttributeEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeEx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
