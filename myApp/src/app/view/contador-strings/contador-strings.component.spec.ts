import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorStringsComponent } from './contador-strings.component';

describe('ContadorStringsComponent', () => {
  let component: ContadorStringsComponent;
  let fixture: ComponentFixture<ContadorStringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorStringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
