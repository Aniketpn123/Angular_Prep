import { TestBed } from '@angular/core/testing';

import { StudentInfo } from './student-info';

describe('StudentInfo', () => {
  let service: StudentInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
