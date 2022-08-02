import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridCustomComponent } from './ag-grid-custom.component';

describe('AgGridCustomComponent', () => {
  let component: AgGridCustomComponent;
  let fixture: ComponentFixture<AgGridCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
