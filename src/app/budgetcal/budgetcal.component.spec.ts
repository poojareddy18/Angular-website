import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetcalComponent } from './budgetcal.component';

describe('BudgetcalComponent', () => {
  let component: BudgetcalComponent;
  let fixture: ComponentFixture<BudgetcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetcalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
