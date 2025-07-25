import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonAuth } from './primary-button-auth';

describe('PrimaryButtonAuth', () => {
  let component: PrimaryButtonAuth;
  let fixture: ComponentFixture<PrimaryButtonAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryButtonAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryButtonAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
