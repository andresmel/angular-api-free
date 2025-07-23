import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReg } from './form-reg';

describe('FormReg', () => {
  let component: FormReg;
  let fixture: ComponentFixture<FormReg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
