import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorsSummaryComponent } from './contractors-summary.component';

describe('ContractorsSummaryComponent', () => {
  let component: ContractorsSummaryComponent;
  let fixture: ComponentFixture<ContractorsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
